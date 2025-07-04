import React, { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import NavVar from "../components/ui/NavVar";
import Schedule from "../components/ui/Schedule";
import Btn from "../components/ui/Btn";
import UploadPdf from "../components/ui/UploadPdf";

export const Route = createFileRoute("/horario")({
  component: RouteComponent,
});

function RouteComponent() {
  const [showPdfPopup, setShowPdfPopup] = useState(false);
  // Ejemplo de cursos para el horario
  const exampleCourses = [
    { day: 0, startHour: 7, endHour: 11, name: "Matemática", color: "#2563eb" },
    {
      day: 0,
      startHour: 11,
      endHour: 21,
      name: "Programación",
      color: "#38a169",
    },
    { day: 4, startHour: 14, endHour: 17, name: "Física", color: "#e53e3e" },
    { day: 1, startHour: 8, endHour: 10, name: "Inglés", color: "#d97706" },
  ];
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
            <div className="flex flex-row items-start justify-start gap-5 h-20">
              <Btn
                text="Upload PDF"
                variant="primary"
                size="lg"
                onClick={() => setShowPdfPopup(true)}
              />
            </div>
            <hr className="border-blue-900 w-full" />
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
