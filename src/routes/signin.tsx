import { createFileRoute } from "@tanstack/react-router";
import Btn from "../components/ui/Btn";

export const Route = createFileRoute("/signin")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen flex">
      <div className="w-3/5 flex flex-col justify-center px-20 bg-white">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Ingresar a cuenta
        </h2>

        <form className="space-y-8">
          <input
            type="email"
            placeholder="Correo el electrónico"
            className="w-full bg-gray-100 rounded-md p-3 text-sm outline-none"
          />
          <div>
            <input
              type="password"
              placeholder="Contraseña"
              className="w-full bg-gray-100 rounded-md p-3 text-sm outline-none"
            />
            <div className="text-right mt-1">
              <a href="#" className="text-orange-500 text-sm hover:underline">
                ¿Recuperar contraseña?
              </a>
            </div>
          </div>

          <Btn
            link="/horario"
            text="Ingresar"
            variant="primary"
            size="lg"
            fullWidth
          />
        </form>

        <div className="flex items-center justify-between my-6">
          <hr className="w-1/3 border-blue-900" />
          <hr className="w-1/3 border-blue-900" />
        </div>

        <div className="flex justify-between gap-4">
          <Btn
            text="Google"
            variant="primary"
            size="md"
            className="flex items-center justify-center w-1/3 py-3 ml-10 text-xl"
          />
          <Btn
            text="MV"
            variant="primary"
            size="md"
            className="flex items-center justify-center w-1/3 py-3 font-bold text-xl mr-10"
          />
        </div>
      </div>

      <div className="w-2/5 bg-blue-600 flex flex-col justify-center items-center text-white">
        <img src="imgs/GLOVElogo.png" alt="GLOV Logo" className="mb-10" />
        <h2 className="text-2xl font-semibold mb-6">Crear cuenta</h2>
        <Btn
          link="/signup"
          text="Regístrate"
          variant="secondary"
          size="lg"
          className="px-40 font-semibold hover:bg-gray-100"
        />
      </div>
    </div>
  );
}
