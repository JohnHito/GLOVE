import React from "react";

export interface ScheduleSegmentProps {
  day: number; // 0 = Lunes, 6 = Domingo
  startHour: number; // 7 = 7:00, 22 = 22:00
  endHour: number; // 9 = 9:00, 10 = 10:00, etc.
  name: string;
  color?: string;
  // Props para selección y eliminación
  selected?: boolean;
  onClick?: () => void;
  onRemove?: () => void;
}

const hourToRow = (hour: number) => hour - 7 + 2; // +2 porque la fila 1 es días, fila 2 es 7:00

const ScheduleSegment: React.FC<ScheduleSegmentProps> = ({
  day,
  startHour,
  endHour,
  name,
  color,
  selected,
  onClick,
  onRemove,
}) => {
  return (
    <div
      className={`flex items-center justify-center text-white font-bold rounded-lg shadow-md text-xs px-1 relative cursor-pointer ${
        selected ? "ring-2 ring-blue-500" : ""
      }`}
      style={{
        gridColumn: day + 2, // +2 porque la columna 1 es horas
        gridRow: `${hourToRow(startHour)} / ${hourToRow(endHour)}`,
        background: color || "#2563eb",
        zIndex: 1,
        opacity: 0.95,
        margin: "2px", // padding visual entre bloques
      }}
      onClick={onClick}
    >
      {name}
      {selected && (
        <button
          className="absolute top-1 right-1 bg-red-600 text-white rounded-full px-2 py-0.5 text-xs shadow hover:bg-red-700"
          onClick={(e) => {
            e.stopPropagation();
            onRemove && onRemove();
          }}
        >
          ×
        </button>
      )}
    </div>
  );
};

export default ScheduleSegment;
