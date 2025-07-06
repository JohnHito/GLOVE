import React from "react";

interface UserPanelPopupProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const UserPanelPopup: React.FC<UserPanelPopupProps> = ({ open, onClose, children }) => {
  if (!open) return null;
  return (
    <>
      {}
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm pointer-events-none z-40" />
      {}
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white rounded-3xl p-0 shadow-lg relative w-full max-w-4xl overflow-hidden">
          <button
            className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-red-600 z-10"
            onClick={onClose}
            aria-label="Cerrar"
          >
            ×
          </button>
          {children}
        </div>
      </div>
    </>
  );
};

export default UserPanelPopup;
