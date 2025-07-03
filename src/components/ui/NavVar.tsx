import React from "react";
import NavVarBtn from "./NavVarBtn";

interface NavVarProps {
  style?: string; // el wrapper puede recibir clases extras si lo deseas
  header: string[]; // textos de los links
  buttons: Array<React.ComponentProps<typeof NavVarBtn>>; // props de NavVarBtn
}

/*-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-

Segun la ia, ahora los podemos importar asi en el html:
<NavVar
  header={[
    "Vista Sign In",
    "Vista Sign Up",
    "Horario",
    "Calendario",
    "Nombre usuario"
  ]}
  buttons={[]}
/>

-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-*/

export default function NavVar(props: NavVarProps) {
  return (
    <nav className={`flex items-center gap-8 ${props.style ?? ''}`}>
      {/* Renderizas los headers como enlaces */}
      {props.header.map((text, idx) => (
        <a
          key={idx}
          href={`/${text.toLowerCase().replace(/\s+/g, '')}`}
          className="hover:underline"
        >
          {text}
        </a>
      ))}

      {/* Ejemplo de uso de tus botones custom */}
      {props.buttons.map((btnProps, idx) => (
        <NavVarBtn key={idx} {...btnProps} />
      ))}

      {/* Avataar GLOVE */}
      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
        <span className="text-purple-700 font-bold text-lg">🖐️</span>
      </div>
    </nav>
  );
}