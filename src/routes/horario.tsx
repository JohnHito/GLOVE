import React, { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import NavVar from "../components/ui/NavVar";
import Schedule from "../components/ui/Schedule";
import Btn from "../components/ui/Btn";
import UploadPdf from "../components/ui/UploadPdf";
import { CourseCard } from "../components/ui/CourseCard";
import type { CourseCardProps } from "../components/ui/CourseCard";
import type { ScheduleSegmentProps } from "../components/ui/ScheduleSegment";

export const Route = createFileRoute("/horario")({
  component: RouteComponent,
});

function RouteComponent() {
  const [showPdfPopup, setShowPdfPopup] = useState(false);
  // Estado para los segmentos del horario
  const [scheduleSegments, setScheduleSegments] = useState<
    ScheduleSegmentProps[]
  >([]);
  // Estado para el índice del segmento seleccionado
  const [selectedSegmentIndex, setSelectedSegmentIndex] = useState<number | null>(null);

  // Cards de ejemplo y estado para cards desde API
  const exampleCards: CourseCardProps[] = [];
  const [cards, setCards] = useState<CourseCardProps[]>(exampleCards);

  // Simulación de fetch API (puedes reemplazar por fetch real)
  useEffect(() => {
    fetch("http://glovedb_0507.test/api/cursos")
      .then((r) => r.json())
      .then((data) => {
        // Mapear la respuesta del API a CourseCardProps
        const colorList = ["blue", "green", "teal", "orange", "peach"];
        const cardsFromApi = (data as any[]).map((item: any, idx: number) => {
          let scheduleArr: string[] = [];
          try {
            // Intenta parsear el string como JSON array
            scheduleArr = JSON.parse(item.schedule_list);
          } catch {
            // Si falla, usa split por coma como fallback
            scheduleArr = (item.schedule_list as string).split(",");
          }
          // Limpia espacios y filtra vacíos
          scheduleArr = scheduleArr.map((s) => s.trim()).filter(Boolean);
          return {
            code: item.course_code,
            name: item.name,
            group: `Grupo ${item.group}`,
            schedule: scheduleArr,
            color: colorList[idx % colorList.length] as CourseCardProps["color"],
          };
        });
        setCards(cardsFromApi);
      })
      .catch(() => {
        // Si hay error, deja los de ejemplo
        setCards(exampleCards);
      });
  }, []);

  // Handler para agregar un curso al horario
  const handleAddToSchedule = (course: CourseCardProps) => {
    // Mapeo de color literal a hex
    const colorMap = {
      blue: "#01BCD2",
      teal: "#95D3C5",
      orange: "#FFA366",
      peach: "#FFD7B0",
      green: "#47BC82",
    };
    // Mapeo de letra a día
    const dayLetterMap: Record<string, number> = {
      L: 0, // Lunes
      K: 1, // Martes
      M: 2, // Miércoles
      J: 3, // Jueves
      V: 4, // Viernes
      S: 5, // Sábado
      D: 6, // Domingo
    };
    // Parsear cada string de schedule tipo "V 17:00-20:50" o "V: 17:00-20:50"
    const segments = course.schedule.flatMap((s) => {
      // Permitir espacios, dos puntos y mayúsculas/minúsculas
      const match = s.match(/^([LMXJKVSD]):?\s*(\d{1,2}):\d{2}\s*-\s*(\d{1,2}):\d{2}$/i);
      if (!match) {
        console.warn("No se pudo parsear el horario:", s);
        return [];
      }
      const [, dayLetter, start, end] = match;
      const day = dayLetterMap[dayLetter.toUpperCase()] ?? 0;
      const startHour = Math.max(7, Math.min(22, parseInt(start, 10)));
      const endHour = Math.max(7, Math.min(22, parseInt(end, 10)));
      return [
        {
          day,
          startHour,
          endHour,
          name: course.name,
          color: course.color ? colorMap[course.color] : undefined,
        },
      ];
    }) as ScheduleSegmentProps[];
    if (segments.length === 0) {
      alert(
        "No se pudo agregar el curso al horario. Revisa el formato de los horarios."
      );
      return;
    }
    // Verificar colisión antes de agregar
    const hasCollision = segments.some(seg =>
      scheduleSegments.some(existing =>
        existing.day === seg.day &&
        // Chequeo de traslape de intervalos
        Math.max(existing.startHour, seg.startHour) < Math.min(existing.endHour, seg.endHour)
      )
    );
    if (hasCollision) {
      alert("Este curso se traslapa con otro ya agregado en el horario.");
      return;
    }
    setScheduleSegments((prev) => {
      // Evitar duplicados exactos (mismo día, hora y nombre)
      const newSegments = segments.filter(
        (seg) =>
          !prev.some(
            (p) =>
              p.day === seg.day &&
              p.startHour === seg.startHour &&
              p.endHour === seg.endHour &&
              p.name === seg.name
          )
      );
      return [...prev, ...newSegments];
    });
  };

  // Handler para eliminar un segmento del horario
  const handleRemoveSegment = (index: number) => {
    setScheduleSegments((prev) => prev.filter((_, i) => i !== index));
    setSelectedSegmentIndex(null);
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

      <main className="p-6 flex flex-col gap-8">
        <div className="flex items-start gap-5">
          {/* El horario ahora usa los segmentos seleccionados */}
          <Schedule 
            courses={scheduleSegments}
            selectedIndex={selectedSegmentIndex}
            onSelectSegment={setSelectedSegmentIndex}
            onRemoveSegment={handleRemoveSegment}
          />
          <aside className="w-full max-w-md flex flex-col gap-3">
            <div className="flex flex-row items-start justify-center h-18">
              <Btn
                text="Upload PDF"
                variant="primary"
                size="lg"
                onClick={() => setShowPdfPopup(true)}
              />
            </div>
            <hr className="border-blue-900 w-full" />
            {/* Lista de CourseCard con scroll y click para agregar al horario */}
            <div
              className="flex flex-col gap-4 mt-4 overflow-y-auto"
              style={{ maxHeight: 550 }}
            >
              {cards.map((card, idx) => (
                <div
                  key={card.code + idx}
                  onClick={() => handleAddToSchedule(card)}
                  style={{ cursor: "pointer" }}
                >
                  <CourseCard {...card} />
                </div>
              ))}
            </div>
          </aside>
        </div>

        {showPdfPopup && (
          <>
            {/* Overlay: dark + blur, but pointer-events-none so it doesn't block interaction */}
            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm pointer-events-none z-40" />
            {/* Modal: above overlay, interactive */}
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="bg-white rounded-xl p-8 shadow-lg relative w-full max-w-md">
                <button
                  className="absolute top-2 right-2 text-2xl text-gray-500 hover:text-red-600"
                  onClick={() => setShowPdfPopup(false)}
                  aria-label="Cerrar"
                >
                  ×
                </button>
                <UploadPdf
                  apiEndpoint="http://glovedb_0507.test/api/cursos" // o donde esté tu ruta `store`
                  onSuccess={(res) => {
                    console.log("Cursos guardados:", res);
                    // podés redirigir o mostrar mensaje aquí
                  }}
                  onError={(err) => {
                    console.error("Error al procesar el PDF:", err);
                  }}
                />
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
