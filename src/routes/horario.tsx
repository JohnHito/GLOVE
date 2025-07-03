import { createFileRoute } from "@tanstack/react-router";
import NavVar from "../components/ui/NavVar";

export const Route = createFileRoute("/horario")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <header className="bg-blue-900 text-white py-4 px-6 flex justify-between items-center">
        <a href="index.html">
          <img src="./imgs/GLOVElogo.png" alt="logo GLOVE" />
        </a>

        <NavVar
          header={[
            "Vista Sign In",
            "Vista Sign Up",
            "Horario",
            "Calendario",
            "Nombre usuario",
          ]}
          buttons={[]}
        />
      </header>

      <main className="p-6 flex">
        <div className="flex-grow">
          <div className="grid grid-cols-8 gap-1 bg-blue-900 text-white text-center rounded-lg shadow-md">
            <div className="p-3">Horas</div>
            <div className="p-3">Lunes</div>
            <div className="p-3">Martes</div>
            <div className="p-3">Miércoles</div>
            <div className="p-3">Jueves</div>
            <div className="p-3">Viernes</div>
            <div className="p-3">Sábado</div>
            <div className="p-3">Domingo</div>
          </div>

          <div className="grid grid-cols-8 gap-1 mt-1">
            <div className="col-span-1 bg-blue-900 text-white text-center rounded-lg shadow-md">
              <div className="py-2">7:00</div>
              <div className="py-2">8:00</div>
              <div className="py-2">9:00</div>
              <div className="py-2">10:00</div>
              <div className="py-2">11:00</div>
              <div className="py-2">12:00</div>
              <div className="py-2">13:00</div>
              <div className="py-2">14:00</div>
              <div className="py-2">15:00</div>
              <div className="py-2">16:00</div>
              <div className="py-2">17:00</div>
              <div className="py-2">18:00</div>
              <div className="py-2">19:00</div>
              <div className="py-2">20:00</div>
              <div className="py-2">21:00</div>
              <div className="py-2">22:00</div>
            </div>

            <div className="col-span-7 grid grid-cols-7 gap-1">
              <div className="col-span-7 h-full w-40">
                <div className="border-b border-gray-300">Curso 01</div>
                <div className="border-b border-gray-300">Curso 02</div>
                <div className="border-b border-gray-300 h-5"></div>
                <div className="border-b border-gray-300">Curso 03</div>
              </div>
            </div>
          </div>
        </div>

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
