import React from "react";

export interface ScheduleSegmentProps {
  day: number;
  startHour: number;
  endHour: number;
  name: string;
  group?: string;
  color?: string;
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
  group,
  color,
  selected,
  onClick,
  onRemove,
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center text-white font-bold rounded-lg shadow-md text-xs px-1 relative cursor-pointer ${
        selected ? "ring-2 ring-blue-500" : ""
      }`}
      style={{
        gridColumn: day + 2,
        gridRow: `${hourToRow(startHour)} / ${hourToRow(endHour)}`,
        background: color || "#2563eb",
        zIndex: 1,
        opacity: 0.95,
        margin: "2px",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
      onClick={onClick}
    >
      <span style={{ width: "100%", textAlign: "center" }}>{name}</span>
      {group && (
        <span
          style={{
            fontWeight: 500,
            fontSize: 11,
            lineHeight: 1.1,
            marginTop: 2,
            opacity: 0.9,
            width: "100%",
            textAlign: "center",
          }}
        >
          {group}
        </span>
      )}
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
