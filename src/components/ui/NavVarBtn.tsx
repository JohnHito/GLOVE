import React from "react";
import { Link } from "@tanstack/react-router";

interface BtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  link: string;
}
export default function NavVarBtn(props: BtnProps) {
  return (
    <div>
      <Link to={props.link} className="hover:underline">
        {props.text}
      </Link>
    </div>
  );
}
