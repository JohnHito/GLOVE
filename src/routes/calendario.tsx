import { createFileRoute } from "@tanstack/react-router";
import React, { useState } from "react";
import NavVar from "../components/ui/NavVar";
import Calendar from "../components/ui/Calendar";
import AddCourseBar from "../components/ui/AddCourseBar";

export const Route = createFileRoute("/calendario")({
  component: RouteComponent,
});

function RouteComponent() {
  const [courseInput, setCourseInput] = useState("");
  const [colorInput, setColorInput] = useState("blue");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [events, setEvents] = useState<any[]>([]);
  const [selectedTaskIdx, setSelectedTaskIdx] = useState<number | null>(null);

  // Cargar recordatorios desde el API al montar
  React.useEffect(() => {
    fetch("http://glovedb_0507.test/api/eventos")
      .then(r => r.json())
      .then(data => setEvents(
        data.map((ev: any) => {
          let end = ev.end_date;
          if (ev.start_date && ev.end_date && ev.start_date !== ev.end_date) {
            // Sumar un día a end_date para visualización correcta
            const endDateObj = new Date(ev.end_date);
            endDateObj.setDate(endDateObj.getDate() + 1);
            end = endDateObj.toISOString().slice(0, 10);
          }
          return {
            id: ev.id,
            title: ev.title,
            start: ev.start_date,
            end,
          };
        })
      ))
      .catch(() => setEvents([]));
  }, []);

  const colorOptions = [
    { name: "Azul", value: "blue", color: "#01BCD2" },
    { name: "Verde", value: "green", color: "#47BC82" },
    { name: "Teal", value: "teal", color: "#95D3C5" },
    { name: "Naranja", value: "orange", color: "#FFA366" },
    { name: "Durazno", value: "peach", color: "#FFD7B0" },
  ];
  const colorMap = {
    blue: "#01BCD2",
    teal: "#95D3C5",
    orange: "#FFA366",
    peach: "#FFD7B0",
    green: "#47BC82",
  };

  const handleAddCourse = async () => {
    if (courseInput.trim() === "" || !startDate) return;
    const newEvent = {
      title: courseInput,
      start_date: startDate,
      end_date: endDate || startDate,
    };
    // Enviar al API
    try {
      const res = await fetch("http://glovedb_0507.test/api/eventos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEvent),
      });
      if (!res.ok) throw new Error("Error al guardar recordatorio");
      // Recargar lista desde el API
      const updated = await fetch("http://glovedb_0507.test/api/eventos").then(r => r.json());
      setEvents(
        updated.map((ev: any) => {
          let end = ev.end_date;
          if (ev.start_date && ev.end_date && ev.start_date !== ev.end_date) {
            const endDateObj = new Date(ev.end_date);
            endDateObj.setDate(endDateObj.getDate() + 1);
            end = endDateObj.toISOString().slice(0, 10);
          }
          return {
            id: ev.id,
            title: ev.title,
            start: ev.start_date,
            end,
          };
        })
      );
    } catch (e) {
      alert("No se pudo guardar el recordatorio");
    }
    setCourseInput("");
    setStartDate("");
    setEndDate("");
  };

  const handleRemoveTask = async (idx: number) => {
    const event = events[idx];
    if (!event || !event.id) return;
    try {
      await fetch(`http://glovedb_0507.test/api/eventos/${event.id}`, { method: "DELETE" });
      // Recargar lista desde el API
      const updated = await fetch("http://glovedb_0507.test/api/eventos").then(r => r.json());
      setEvents(updated);
    } catch {
      alert("No se pudo eliminar el recordatorio");
    }
    setSelectedTaskIdx(null);
  };

  return (
    <div>
      <header className="bg-blue-900 text-white py-4 px-6 flex justify-between items-center">
        <a href="#">
          <img src="./imgs/GLOVElogo.png" alt="logo GLOVE" />
        </a>

        <NavVar
          header={[
            { text: "Horario", to: "/horario" },
            { text: "Calendario", to: "/calendario" },
            { text: "Nombre usuario", to: "/perfil" },
          ]}
        />
      </header>

      <main className="flex px-8 py-6 gap-8">
        <section className="flex-1 bg-white">
          <Calendar
            view="dayGridMonth"
            events={events}
            onDateClick={() => {}}
          />
        </section>
        <aside className="w-full max-w-md flex flex-col gap-3 pl-1">
          <AddCourseBar
            value={courseInput}
            onChange={(e) => setCourseInput(e.target.value)}
            onAdd={handleAddCourse}
            color={colorInput}
            onColorChange={e => setColorInput(e.target.value)}
            colorOptions={colorOptions}
            colorMap={colorMap}
            placeholder="Agregar..."
            btnLabel="+"
          />
          <div className="flex flex-row gap-5 items-center justify-center mt-2">
            <label className="text-sm font-semibold text-blue-900">Inicio:</label>
            <input
              type="date"
              value={startDate}
              onChange={e => setStartDate(e.target.value)}
              className="rounded px-2 py-1 border border-blue-300 focus:outline-none"
            />
            <label className="text-sm font-semibold text-blue-900">Fin:</label>
            <input
              type="date"
              value={endDate}
              onChange={e => setEndDate(e.target.value)}
              className="rounded px-2 py-1 border border-blue-300 focus:outline-none"
            />
          </div>

          <hr className="border-blue-900 w-full mt-4" />
          <div className="flex flex-col gap-4 mt-4 overflow-y-auto" style={{ maxHeight: 900 }}>
            {events.map((ev, idx) => (
              <div key={(ev.id ?? ev.title) + ev.start + idx} className="relative group" onClick={() => setSelectedTaskIdx(idx)}>
                <div
                  style={{
                    background: ev.color || colorMap.blue,
                    borderRadius: 15,
                    color: "white",
                    padding: "12px 18px",
                    minWidth: 250,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  <div style={{ fontSize: 15, fontWeight: 700 }}>{ev.title}</div>
                  <div style={{ fontSize: 13, opacity: 0.85 }}>
                    {ev.start}
                    {ev.end ? ` - ${ev.end}` : ""}
                  </div>
                  {selectedTaskIdx === idx && (
                    <button
                      className="absolute top-2 right-4 text-xl text-white bg-red-500 rounded-full w-7 h-7 flex items-center justify-center shadow hover:bg-red-700 transition z-10"
                      onClick={e => { e.stopPropagation(); handleRemoveTask(idx); }}
                      aria-label="Eliminar tarea"
                    >
                      ×
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </aside>
      </main>
    </div>
  );
}
