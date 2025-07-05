import React from "react";
import { Link } from "@tanstack/react-router";

interface BtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: "primary" | "secondary" | "outline" | "icon" | "settings";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  iconLeft?: string;
  iconRight?: string;
  link?: string;
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
    secondary:
      "bg-white text-blue-900 border border-blue-900 hover:bg-blue-100",
    outline:
      "bg-transparent text-blue-900 border border-blue-900 hover:bg-blue-100",
    icon: "bg-blue-900 text-white hover:bg-blue-800",
    settings:
      "flex items-center justify-start cursor-pointer hover:bg-gray-100 p-3 rounded-md text-blue-900 bg-white w-full text-base font-normal",
  };

  const sizeClasses = {
    sm: "px-3 py-1 text-sm rounded",
    md: "px-4 py-2 text-base rounded-md",
    lg: "px-8 py-4 text-lg rounded-xl",
  };

  const widthClass = fullWidth ? "w-full" : "";
  const flexClass =
    iconLeft || iconRight || variant === "settings"
      ? "flex items-center gap-3"
      : "";
  const baseClass =
    variant === "settings"
      ? "appearance-none focus:outline-none text-left"
      : "inline-block appearance-none focus:outline-none text-center justify-center";

  // Concatenar las clases usando template strings, filter y join
  const classes = [
    baseClass,
    variantClasses[variant],
    sizeClasses[size],
    widthClass,
    flexClass,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (props.link) {
    return (
      <Link to={props.link} className={classes}>
        {iconLeft && <img src={iconLeft} alt="" className="w-5 h-5" />}
        {text}
        {iconRight && <img src={iconRight} alt="" className="w-5 h-5" />}
      </Link>
    );
  }
  return (
    <button className={classes} {...props}>
      {iconLeft && <img src={iconLeft} alt="" className="w-5 h-5" />}
      {text}
      {iconRight && <img src={iconRight} alt="" className="w-5 h-5" />}
    </button>
  );
}
