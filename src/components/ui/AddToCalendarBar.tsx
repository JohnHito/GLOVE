import React from "react";
import TxtField from "./TxtField";
import Btn from "./Btn";

interface AddCourseBarProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAdd: () => void;
  placeholder?: string;
  icon?: React.ReactNode;
  btnLabel?: string;
}

const AddCourseBar: React.FC<AddCourseBarProps> = ({
  value,
  onChange,
  onAdd,
  placeholder = "Agregar...",
  icon,
  btnLabel = " + ",
}) => {
  return (
    <div className="flex items-center bg-blue-900 rounded-xl px-4 py-2 gap-3 w-full max-w-lg">
      {icon && (
        <span className="flex flex-row items-center mr-2">
          {icon}
        </span>
      )}
      <div className="flex-1 flex items-center">
        <TxtField
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="bg-white rounded-full px-4 py-2 text-gray-700 w-full focus:outline-none mb-0"
          variant="pill"
        />
      </div>
      <Btn
        text={btnLabel}
        variant="primary"
        size="md"
        className="ml-2 px-4 py-2 text-lg"
        onClick={onAdd}
      />
    </div>
  );
};

export default AddCourseBar;
