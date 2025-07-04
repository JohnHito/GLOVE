import { createFileRoute } from "@tanstack/react-router";
//import { Link } from "@tanstack/react-router";
import NavVar from "../components/ui/NavVar";
import Btn from "../components/ui/Btn";
export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
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

      <section className="bg-white text-blue-900">
        <div className="container mx-auto flex flex-col items-center justify-center py-20 gap-6 px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Planificá tu semestre de forma visual e inteligente
          </h1>

          <p className="text-lg text-gray-800 max-w-xl">
            Optimiza tu horario, integra materias desde PDF y organiza tu
            semestre en minutos.
          </p>

          <Btn
            text="Comenzar gratis"
            variant="primary"
            size="lg"
            link="/signup"
          />
        </div>
      </section>

      <section 
  className="fixed bottom-0 left-0 w-full bg-blue-900 text-white py-16 px-6 z-50">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
    <div className="space-y-3">
      <div className="text-5xl">🧠</div>
      <h3 className="text-2xl font-semibold">Asistente inteligente</h3>
      <p className="text-gray-300">
        Generá horarios optimizados en segundos con nuestra API.
      </p>
    </div>
    <div className="space-y-3">
      <div className="text-5xl">📅</div>
      <h3 className="text-2xl font-semibold">Diseño visual</h3>
      <p className="text-gray-300">
        Arrastrá y organizá bloques con una interfaz clara.
      </p>
    </div>
    <div className="space-y-3">
      <div className="text-5xl">📥</div>
      <h3 className="text-2xl font-semibold">Carga desde PDF</h3>
      <p className="text-gray-300 fa-cloud-moon-rain">
        Subí tu archivo de matrícula y obtené tu horario al instante.
      </p>
    </div>
  </div>
</section>
    </div>
  );
}
