import { createFileRoute } from "@tanstack/react-router";
import NavVar from "../components/ui/NavVar";
import Schedule from "../components/ui/Schedule";

export const Route = createFileRoute("/horario")({
  component: RouteComponent,
});

function RouteComponent() {
  // Ejemplo de cursos para el horario
  const exampleCourses = [
    { day: 0, startHour: 7, endHour: 11, name: "Matemática", color: "#2563eb" },
    { day: 2, startHour: 10, endHour: 12, name: "Programación", color: "#38a169" },
    { day: 4, startHour: 14, endHour: 17, name: "Física", color: "#e53e3e" },
    { day: 1, startHour: 8, endHour: 10, name: "Inglés", color: "#d97706" },
  ];
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

      <main className="p-6 flex flex-col gap-8">
        <Schedule courses={exampleCourses} />

        <aside className="w-full max-w-md flex flex-col gap-3 pl-8">
          <div className="flex flex-row items-start justify-start gap-5 h-20">
            <div className="flex-shrink-0">
              <button
                aria-label="Subir PDF"
                className="flex flex-col items-center justify-center bg-blue-900 text-white px-3 py-2 rounded-xl w-[90px] h-[72px] hover:bg-blue-800"
              >
                <span className="text-xl leading-none mb-1">📤</span>
                <span className="font-medium text-[11px] text-center leading-tight">
                  Upload PDF
                </span>
              </button>
            </div>

            <div className="flex justify-around items-center bg-blue-600 text-white px-4 py-2 rounded-xl w-full h-[72px] hover:bg-blue-500 shadow-sm">
              <div className="flex flex-col items-center px-2">
                <span className="text-xl leading-none mb-1">📋</span>
                <span className="font-medium text-[11px] text-center leading-tight">
                  List Courses
                </span>
              </div>

              <div className="flex flex-col items-center px-2">
                <span className="text-xl leading-none mb-1">🔄</span>
                <span className="font-medium text-[11px] text-center leading-tight">
                  asd
                </span>
              </div>
            </div>
          </div>

          <hr className="border-blue-900 w-full mt-2" />
        </aside>
      </main>
    </div>
  );
}
