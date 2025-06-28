/*interface BtnProps {
  text: string;
  style: string;
  icon?: string;
}

export default function Btn(props: BtnProps) {
  return <button className={props.style}>{props.text}

  {props.icon && <img src={props.icon} alt="" className="w-4 h-4 mr-2" />}

  </button>;
}*/

/*-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-

Segun la ia, ahora los podemos importar asi en el html:

<Btn text="Ingresar" variant="primary" size="lg" fullWidth />
<Btn text="Cancelar" variant="secondary" size="md" />
<Btn text="Google" variant="primary" iconLeft="/icons/google.svg" />
<Btn text="Ver más" variant="outline" size="md" /> 

-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-*/

import React from "react";

interface BtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: "primary" | "secondary" | "outline" | "icon";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  iconLeft?: string;
  iconRight?: string;
}

export default function Btn({
  text,
  variant = "primary",
  size = "md",
  fullWidth = false,
  iconLeft,
  iconRight,
  className,
  ...props
}: BtnProps) {
  const variantClasses = {
    primary: "bg-blue-900 text-white hover:bg-blue-800 font-semibold",
    secondary: "bg-white text-blue-900 border border-blue-900 hover:bg-blue-100",
    outline: "bg-transparent text-blue-900 border border-blue-900 hover:bg-blue-100",
    icon: "bg-blue-900 text-white hover:bg-blue-800",
  };

  const sizeClasses = {
    sm: "px-3 py-1 text-sm rounded",
    md: "px-4 py-2 text-base rounded-md",
    lg: "px-8 py-4 text-lg rounded-xl",
  };

  const widthClass = fullWidth ? "w-full" : "";
  const flexClass = iconLeft || iconRight ? "flex items-center justify-center gap-2" : "";

  // Concatenar las clases usando template strings, filter y join
  const classes = [
    variantClasses[variant],
    sizeClasses[size],
    widthClass,
    flexClass,
    className
  ].filter(Boolean).join(' ');

  return (
    <button className={classes} {...props}>
      {iconLeft && <img src={iconLeft} alt="" className="w-5 h-5" />}
      {text}
      {iconRight && <img src={iconRight} alt="" className="w-5 h-5" />}
    </button>
  );
}
