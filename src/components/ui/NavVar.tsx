import React from "react";
import { useLocation } from "@tanstack/react-router"; // Ajusta según el router que uses
import NavVarBtn from "./NavVarBtn";
import ProfileAvatar from "./ProfileAvatar";

interface NavVarProps {
  style?: string;
  header: { text: string; to: string }[];
  buttons?: Array<React.ComponentProps<typeof NavVarBtn>>;
}

export default function NavVar(props: NavVarProps) {
  const location = useLocation();

  return (
    <nav className={`flex items-center gap-8 ${props.style ?? ""}`}>
      {props.header.map(({ text, to }, idx) => {
        // Compara si la ruta activa es igual al destino de este link
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
    </nav>
  );
}
