/*interface TxtFieldProps {
    text: string
    style: string
}

export default function TxtField(props: TxtFieldProps) {
  return <div className={props.style}>{props.text}</div>;
}*/

/*-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-

Segun la ia, ahora los podemos importar asi en el html:

<TxtField
  label="Correo electrónico"
  type="email"
  placeholder="Correo electrónico"
  fullWidth
  variant="normal"
/>

<TxtField
  placeholder="Agregar..."
  variant="pill"
  iconLeft={<svg // tu ícono SVG aquí // />}
  fullWidth
/>

<TxtField
  label="Contraseña"
  type="password"
  fullWidth
  error="La contraseña es obligatoria"
/> 

-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-*/

import React from "react";

interface TxtFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  variant?: "normal" | "pill";
  iconLeft?: React.ReactNode;
  fullWidth?: boolean;
  error?: string;
}

export default function TxtField({
  label,
  variant = "normal",
  iconLeft,
  fullWidth = false,
  error,
  className,
  ...props
}: TxtFieldProps) {
  // Selección de clases por variante
  const variantClasses = {
    normal: "bg-gray-100 rounded-md p-3 text-sm outline-none",
    pill: "bg-white text-black rounded-full px-6 py-2 text-sm focus:outline-none",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <div className={`mb-4 ${widthClass}`}>
      {label && (
        <label className="block mb-1 text-gray-700 text-sm">{label}</label>
      )}

      <div className={`relative flex items-center`}>
        {iconLeft && <span className="absolute left-3">{iconLeft}</span>}
        <input
          className={[
            variantClasses[variant],
            widthClass,
            iconLeft ? "pl-10" : "",
            error ? "border border-red-500" : "",
            className,
          ]
            .filter(Boolean)
            .join(" ")}
          {...props}
        />
      </div>
      {error && <div className="mt-1 text-red-500 text-xs">{error}</div>}
    </div>
  );
}
