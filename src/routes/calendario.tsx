import { createFileRoute } from "@tanstack/react-router";
import React, { useState } from "react";
import NavVar from "../components/ui/NavVar";
import Calendar from "../components/ui/Calendar";
import AddCourseBar from "../components/ui/AddToCalendarBar";

export const Route = createFileRoute("/calendario")({
  component: RouteComponent,
});

function RouteComponent() {
  const [courseInput, setCourseInput] = useState("");
  const [colorInput, setColorInput] = useState("blue");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [events, setEvents] = useState<any[]>([]);

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

  const handleAddCourse = () => {
    if (courseInput.trim() === "" || !startDate) return;
    setEvents([
      ...events,
      {
        title: courseInput,
        start: startDate,
        ...(endDate ? { end: endDate } : {}),
        color: colorMap[colorInput as keyof typeof colorMap],
      },
    ]);
    setCourseInput("");
    setStartDate("");
    setEndDate("");
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
        <section className="flex-1 bg-white rounded-2xl p-6 border border-blue-900">
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
              <div key={ev.title + ev.start + idx}>
                <div
                  style={{
                    background: ev.color || colorMap.blue,
                    borderRadius: 15,
                    color: "white",
                    padding: "12px 18px",
                    minWidth: 250,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                    fontWeight: 600,
                  }}
                >
                  <div style={{ fontSize: 15, fontWeight: 700 }}>{ev.title}</div>
                  <div style={{ fontSize: 13, opacity: 0.85 }}>
                    {ev.start}
                    {ev.end ? ` - ${ev.end}` : ""}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </main>
    </div>
  );
}
