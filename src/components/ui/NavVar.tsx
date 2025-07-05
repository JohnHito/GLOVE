import React, { useState } from "react";
import { useLocation } from "@tanstack/react-router";
import NavVarBtn from "./NavVarBtn";
import ProfileAvatar from "./ProfileAvatar";
import UserPanel from "./UserPanel";

interface NavVarProps {
  style?: string;
  header: { text: string; to: string }[];
  buttons?: Array<React.ComponentProps<typeof NavVarBtn>>;
}

export default function NavVar(props: NavVarProps) {
  const location = useLocation();
  const [showUserPanel, setShowUserPanel] = useState(false);

  return (
    <nav className={`flex items-center gap-8 ${props.style ?? ""}`}>
      {props.header.map(({ text, to }, idx) => {
        if (text === "Nombre usuario") {
          return (
            <button
              key={idx}
              type="button"
              className={
                location.pathname === to
                  ? "bg-white text-blue-800 px-3 py-1 rounded font-bold"
                  : "hover:underline"
              }
              onClick={() => setShowUserPanel(true)}
            >
              {text}
            </button>
          );
        }
        const selected = location.pathname === to;
        return (
          <a
            key={idx}
            href={to}
            className={
              selected
                ? "bg-white text-blue-800 px-3 py-1 rounded font-bold"
                : "hover:underline"
            }
          >
            {text}
          </a>
        );
      })}
      {props.buttons?.map((btnProps, idx) => (
        <NavVarBtn key={idx} {...btnProps} />
      ))}
      <ProfileAvatar />
      {showUserPanel && (
        <UserPanel open={showUserPanel} onClose={() => setShowUserPanel(false)} />
      )}
    </nav>
  );
}
