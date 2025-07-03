import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <header className="bg-blue-900 text-white py-4 px-6 flex justify-between items-center">
        <a href="index.html">
          <img src="./imgs/GLOVElogo.png" alt="logo GLOVE" />
        </a>

        <nav className="flex items-center gap-8">
          <Link to="/signin" className="hover:underline">
            Vista Sign In{" "}
          </Link>

          <Link to="/signup" className="hover:underline">
            Vista Sign Up{" "}
          </Link>

          <Link to="/horario" className="hover:underline">
            Horario{" "}
          </Link>

          <Link to="/calendario" className="hover:underline">
            Calendario{" "}
          </Link>

          <Link to="/perfil" className="hover:underline">
            Nombre de usuario{" "}
          </Link>

          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
            <span className="text-purple-700 font-bold text-lg">🖐️</span>
          </div>
        </nav>
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

          <a
            href="/signup.html"
            className="bg-blue-900 text-white px-8 py-3 rounded-md font-bold hover:bg-blue-800 w-fit mx-auto"
          >
            Comenzar gratis
          </a>
        </div>
      </section>

      <section className="bg-blue-50 py-12">
        <div className="container mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-blue-900 text-center mb-8">
            ¿Cómo empezar?
          </h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <div className="flex-1 flex flex-col items-center text-center">
              <div className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center mb-2 font-bold text-lg">
                1
              </div>
              <p>Regístrate y crea tu perfil</p>
            </div>
            <div className="flex-1 flex flex-col items-center text-center">
              <div className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center mb-2 font-bold text-lg">
                2
              </div>
              <p>Agrega tus materias y horarios</p>
            </div>
            <div className="flex-1 flex flex-col items-center text-center">
              <div className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center mb-2 font-bold text-lg">
                3
              </div>
              <p>Consulta y organiza tu calendario</p>
              <p>¡así de fácil!</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-900 text-white py-16 px-6 w-full z-50">
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
