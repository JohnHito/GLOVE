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
  //icon,
  btnLabel = " + ",
}) => {
  return (
    <div className="flex items-center bg-blue-900 rounded-xl px-4 py-3 gap-1 w-full max-w-lg shadow-md">
      {/*
      {icon && (
        <span className="flex flex-row items-center mr-2">
          {icon}
        </span>
      )}
      */}
      <div className="flex-1 flex items-center gap-3">
        <div className="relative flex items-center">
          <span
            className="absolute left-2 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full border-2 border-white shadow"
            style={{ background: colorMap[color as keyof typeof colorMap] }}
          />
          <select
            value={color}
            onChange={onColorChange}
            className="appearance-none pl-8 pr-1 py-1 rounded text-blue-900 font-semibold focus:outline-none cursor-pointer"
            style={{ fontWeight: 600 }}
          >
            {colorOptions.map((opt) => (
              <option
                key={opt.value}
                value={opt.value}
                style={{ background: opt.color, color: "#222" }}
              >
              </option>
            ))}
          </select>
        </div>
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
