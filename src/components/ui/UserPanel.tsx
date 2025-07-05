import React, { useState } from "react";
import UserPanelPopup from "./UserPanelPopup";
import Switch from "./Switch";
import Btn from "./Btn";
import ProfileAvatar from "./ProfileAvatar";

interface UserPanelProps {
  open: boolean;
  onClose: () => void;
}

const UserPanel: React.FC<UserPanelProps> = ({ open, onClose }) => {
  const [notif, setNotif] = useState(true);
  const [night, setNight] = useState(true);

  return (
    <UserPanelPopup open={open} onClose={onClose}>
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2">
        <div className="bg-blue-900 text-white flex flex-col items-center justify-center h-full min-h-[400px]">
          <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mb-4">
            <ProfileAvatar size={128} />
          </div>
          <div className="flex items-center">
            <span className="py-2 rounded-md font-semibold">
              Nombre Usuario
            </span>
            <Btn
              text="✏️"
              variant="icon"
              size="sm"
              onClick={() => {}}
            />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-12 text-blue-900 ">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <span className="text-xl">🔔</span>
              <span className="font-medium">Notificaciones</span>
            </div>
            <Switch checked={notif} onChange={setNotif} />
          </div>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <span className="text-xl">🌙</span>
              <span className="font-medium">Modo Noche</span>
            </div>
            <Switch checked={night} onChange={setNight} />
          </div>

          <div className="space-y-4">
            <Btn
              text="🪪 Expediente"
              variant="settings"
              fullWidth
              iconRight=""
              onClick={() => {}}
            />
            <Btn
              text="ℹ️ Información"
              variant="settings"
              fullWidth
              iconRight=""
              onClick={() => {}}
            />
            <Btn
              text="👥 Sobre Nosotros"
              variant="settings"
              fullWidth
              iconRight=""
              onClick={() => {}}
            />
            <Btn
              text="🛡️ Condiciones de uso y Políticas"
              variant="settings"
              fullWidth
              iconRight=""
              onClick={() => {}}
            />
            <Btn
              text="🚪 Cerrar sesión"
              variant="settings"
              fullWidth
              className="hover:bg-red-50 text-red-600 font-semibold"
              link="/signin"
            />
          </div>
        </div>
      </div>
    </UserPanelPopup>
  );
};

export default UserPanel;
