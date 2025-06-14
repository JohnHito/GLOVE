interface ToggleSwitchProps{
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
}