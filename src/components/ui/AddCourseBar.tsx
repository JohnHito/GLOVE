import React from "react";
import TxtField from "./TxtField";
import Btn from "./Btn";

interface AddCourseBarProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAdd: () => void;
  color: string;
  onColorChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  colorOptions: { name: string; value: string; color: string }[];
  colorMap: Record<string, string>;
  placeholder?: string;
  icon?: React.ReactNode;
  btnLabel?: string;
}

const AddCourseBar: React.FC<AddCourseBarProps> = ({
  value,
  onChange,
  onAdd,
  color,
  onColorChange,
  colorOptions,
  colorMap,
  placeholder = "Agregar...",
  btnLabel = " + ",
}) => {
  return (
    <div className="flex items-center bg-blue-900 rounded-xl px-4 py-3 gap-1 w-full max-w-lg shadow-md">
      {}
      <div className="flex-1 flex items-center gap-3">
        <label
          className="relative flex items-center cursor-pointer group"
          style={{ minWidth: 48 }}
        >
          <span
            className="absolute left-2 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full border-2 border-white shadow group-hover:ring-2 group-hover:ring-blue-400 transition"
            style={{ background: colorMap[color as keyof typeof colorMap] }}
          />
          <select
            value={color}
            onChange={onColorChange}
            className="opacity-0 absolute left-0 top-0 w-full h-full cursor-pointer"
            style={{ minWidth: 48, minHeight: 32 }}
          >
            {colorOptions.map((opt) => (
              <option
                key={opt.value}
                value={opt.value}
                style={{ background: opt.color, color: "#222" }}
              >
                {opt.name}
              </option>
            ))}
          </select>
          <span
            className="pl-8 pr-1 py-1 text-blue-900 font-semibold select-none"
            style={{ fontWeight: 600 }}
          >
            {}
          </span>
        </label>
        <TxtField
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="bg-white rounded-full px-4 py-2 text-gray-700 w-72 focus:outline-none mb-0 border border-blue-200 shadow-sm"
          variant="pill"
        />
      </div>
      <Btn
        text={btnLabel}
        variant="icon"
        size="md"
        className="ml-2 px-6 py-2 text-lg font-bold shadow-md"
        onClick={onAdd}
      />
    </div>
  );
};

export default AddCourseBar;
