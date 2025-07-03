/*interface ToggleSwitchProps{
    style: string;
    icon?: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
}
export default function ToggleSwitch({ style, checked, onChange }: ToggleSwitchProps) {
  return (
    <button
      className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ease-in-out 
        ${checked ? 'bg-blue-800' : 'bg-gray-400'} ${style}`}
      onClick={() => onChange(!checked)}
    >
      <div
        className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300
          ${checked ? 'translate-x-6' : 'translate-x-0'}`}
      ></div>
    </button>
  );
}*/

/*-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-

Segun la ia, ahora los podemos importar asi en el html:

const [activo, setActivo] = useState(false);

<ToggleSwitch
  checked={activo}
  onChange={setActivo}F
  label="Notificaciones"
  variant="primary"
  fullWidth
/>

-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-*/

//import React from "react";

interface ToggleSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
  className?: string;
}

export default function ToggleSwitch({
  checked,
  onChange,
  label,
  variant = "primary",
  fullWidth = false,
  className,
  ...props
}: ToggleSwitchProps) {
  const trackOn = variant === "primary"
    ? "bg-blue-800 peer-checked:bg-blue-900"
    : "bg-gray-400 peer-checked:bg-blue-400";

  const classes = [
    "w-11 h-6 flex items-center",
    trackOn,
    "rounded-full transition-colors duration-300 relative",
    fullWidth ? "w-full" : "",
    className
  ].filter(Boolean).join(" ");

  return (
    <label className="inline-flex items-center cursor-pointer select-none">
      <input
        type="checkbox"
        checked={checked}
        onChange={e => onChange(e.target.checked)}
        className="sr-only peer"
        {...props}
      />
      <div className={classes}>
        <div
          className="w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300
          absolute left-0 top-1/2 -translate-y-1/2 
          peer-checked:translate-x-5"
        />
      </div>
      {label && (
        <span className="ml-3 text-sm text-gray-700">{label}</span>
      )}
    </label>
  );
}