import { createFileRoute } from "@tanstack/react-router";
//import { Link } from "@tanstack/react-router";
import NavVar from "../components/ui/NavVar";
import Btn from "../components/ui/Btn";
import Footer from "../components/ui/Footer";

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
      
      <Footer />
    </div>
  );
}
