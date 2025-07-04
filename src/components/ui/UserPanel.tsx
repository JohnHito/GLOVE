import React from "react";

const UserPanel = () => {
  return (
    <div className="h-screen bg-gray-100 text-gray-800 flex items-center justify-center">
      <div className="w-full max-w-6xl px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-blue-900 text-white rounded-3xl p-8 flex flex-col items-center justify-center h-full min-h-[400px]">
          <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mb-4">
            <img
              src="ruta/avatar.png"
              alt="Avatar"
              className="w-28 h-28 object-cover rounded-full"
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-blue-600 py-2 px-4 rounded-md font-semibold">
              Nombre Usuario
            </span>
            <button className="bg-blue-600 p-2 rounded-md">✏️</button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <span className="text-blue-900 text-xl">🔔</span>
              <span className="font-medium">Notificaciones</span>
            </div>
            <label className="inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" checked />
              <div className="w-11 h-6 bg-blue-200 peer-focus:outline-none rounded-full peer peer-checked:bg-blue-900 relative">
                <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-all peer-checked:translate-x-5"></div>
              </div>
            </label>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between cursor-pointer hover:bg-gray-100 p-3 rounded-md">
              <div className="flex items-center gap-3">
                <span>🪪</span>
                <span>Expediente</span>
              </div>
              <span>›</span>
            </div>
            <div className="flex items-center justify-between cursor-pointer hover:bg-gray-100 p-3 rounded-md">
              <div className="flex items-center gap-3">
                <span>ℹ️</span>
                <span>Información</span>
              </div>
              <span>›</span>
            </div>
            <div className="flex items-center justify-between cursor-pointer hover:bg-gray-100 p-3 rounded-md">
              <div className="flex items-center gap-3">
                <span>👥</span>
                <span>Sobre Nosotros</span>
              </div>
              <span>›</span>
            </div>
            <div className="flex items-center justify-between cursor-pointer hover:bg-gray-100 p-3 rounded-md">
              <div className="flex items-center gap-3">
                <span>🛡️</span>
                <span>Condiciones de uso y Políticas</span>
              </div>
              <span>›</span>
            </div>
            <div className="flex items-center justify-between cursor-pointer hover:bg-red-50 text-red-600 font-semibold p-3 rounded-md">
              <div className="flex items-center gap-3">
                <span>🚪</span>
                <span>Cerrar sesión</span>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <div className="flex items-center bg-blue-200 rounded-full w-24 p-1">
              <button className="bg-blue-900 text-white w-1/2 rounded-full py-1">
                🌞
              </button>
              <button className="text-blue-900 w-1/2 py-1">🌙</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPanel;
