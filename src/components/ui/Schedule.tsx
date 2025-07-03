import React from "react";
import ScheduleSegment from "./ScheduleSegment";
import type { ScheduleSegmentProps } from "./ScheduleSegment";

const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
const hours = Array.from({ length: 16 }, (_, i) => 7 + i); // 7:00 a 22:00

interface ScheduleProps {
  courses: ScheduleSegmentProps[];
}

const Schedule: React.FC<ScheduleProps> = ({ courses }) => {
  return (
    <div className="relative w-full" style={{ minHeight: 700 }}>
      <div
        className="grid border rounded-lg bg-white"
        style={{
          gridTemplateColumns: `80px repeat(7, 1fr)`,
          gridTemplateRows: `repeat(${hours.length}, 40px)`
        }}
      >
        {/* Horas */}
        {hours.map((h, i) => (
          <div key={h} className="border-b border-gray-200 text-xs flex items-center justify-center font-semibold bg-blue-50" style={{ gridColumn: 1, gridRow: i + 1 }}>{h}:00</div>
        ))}
        {/* Días */}
        {days.map((d, i) => (
          <div key={d} className="border-b border-gray-200 text-xs flex items-center justify-center font-semibold bg-blue-100" style={{ gridColumn: i + 2, gridRow: 1 }}>{d}</div>
        ))}
        {/* Cursos */}
        {courses.map((c, i) => (
          <ScheduleSegment key={i} {...c} />
        ))}
      </div>
    </div>
  );
};

export default Schedule;
