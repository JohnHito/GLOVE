import React, { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import NavVar from "../components/ui/NavVar";
import Schedule from "../components/ui/Schedule";
import Btn from "../components/ui/Btn";
import UploadPdf from "../components/ui/UploadPdf";
import { CourseCard } from "../components/ui/CourseCard";
import type { CourseCardProps } from "../components/ui/CourseCard";

export const Route = createFileRoute("/horario")({
  component: RouteComponent,
});

function RouteComponent() {
  const [showPdfPopup, setShowPdfPopup] = useState(false);
  // Ejemplo de cursos para el horario
  const exampleCourses = [
    { day: 0, startHour: 7, endHour: 11, name: "Matemática", color: "#2563eb" },
    { day: 0, startHour: 11, endHour: 21, name: "Programación", color: "#38a169" },
    { day: 4, startHour: 14, endHour: 17, name: "Física", color: "#e53e3e" },
    { day: 1, startHour: 8, endHour: 10, name: "Inglés", color: "#d97706" },
  ];

  // Cards de ejemplo y estado para cards desde API
  const exampleCards: CourseCardProps[] = [
    {
      code: "MAT101",
      name: "Matemática Básica",
      group: "Grupo 1",
      schedule: ["Lunes 7:00-9:00", "Miércoles 10:00-12:00"],
      color: "blue",
    },
    {
      code: "PROG202",
      name: "Programación Avanzada",
      group: "Grupo 2",
      schedule: ["Martes 8:00-10:00", "Jueves 14:00-16:00"],
      color: "green",
    },
  ];
  const [cards, setCards] = useState<CourseCardProps[]>(exampleCards);

  // Simulación de fetch API (puedes reemplazar por fetch real)
  useEffect(() => {
    // fetch('/api/courses').then(r => r.json()).then(setCards);
  }, []);

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
          <Schedule courses={exampleCourses} />
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
            {/* Lista de CourseCard con scroll */}
            <div className="flex flex-col gap-4 mt-4 overflow-y-auto" style={{ maxHeight: 350 }}>
              {cards.map((card, idx) => (
                <CourseCard key={card.code + idx} {...card} />
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
                <UploadPdf apiEndpoint="/api/upload" />
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
