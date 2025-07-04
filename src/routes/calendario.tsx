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

  const handleAddCourse = () => {
    // Lógica para agregar el curso
    console.log("Curso agregado:", courseInput);
    setCourseInput("");
  };

  return (
    <div>
      <header className="bg-blue-900 text-white py-4 px-6 flex justify-between items-center">
        <a href="index.html">
          <img src="./imgs/GLOVElogo.png" alt="logo GLOVE" />
        </a>

        <NavVar
          header={[
            { text: "Vista Sign In", to: "/signin" },
            { text: "Vista Sign Up", to: "/signup" },
            { text: "Horario", to: "/horario" },
            { text: "Calendario", to: "/calendario" },
            { text: "Nombre usuario", to: "/perfil" },
          ]}
        />
      </header>

      <main className="flex px-8 py-6 gap-8">
        <section className="flex-1 bg-white rounded-2xl p-6 border border-blue-900">
          <Calendar view="dayGridMonth" />
        </section>

        <aside className="w-full max-w-md flex flex-col gap-3 pl-1">
          <AddCourseBar
            value={courseInput}
            onChange={(e) => setCourseInput(e.target.value)}
            onAdd={handleAddCourse}
            placeholder="Agregar..."
            icon={
              <div className="flex flex-row items-center gap-2 text-white">
                <span className="text-xl leading-none">📋</span>
                <span className="text-xs font-semibold">List Courses</span>
              </div>
            }
            btnLabel="+"
          />
          <hr className="border-blue-900 w-full mt-4" />
        </aside>
      </main>
    </div>
  );
}
