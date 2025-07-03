import React from "react";

export interface ScheduleSegmentProps {
  day: number; // 0 = Lunes, 6 = Domingo
  startHour: number; // 7 = 7:00, 22 = 22:00
  endHour: number;   // 9 = 9:00, 10 = 10:00, etc.
  name: string;
  color?: string;
}

const hourToRow = (hour: number) => hour - 7 + 2; // +2 porque la fila 1 es días, fila 2 es 7:00

const ScheduleSegment: React.FC<ScheduleSegmentProps> = ({ day, startHour, endHour, name, color }) => {
  return (
    <div
      className="flex items-center justify-center text-white font-bold rounded-lg shadow-md text-xs px-1"
      style={{
        gridColumn: day + 2, // +2 porque la columna 1 es horas
        gridRow: `${hourToRow(startHour)} / ${hourToRow(endHour)}`,
        background: color || '#2563eb',
        zIndex: 1,
        opacity: 0.95,
      }}
    >
      {name}
    </div>
  );
};

export default ScheduleSegment;
