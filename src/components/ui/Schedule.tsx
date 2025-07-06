import React from "react";
import ScheduleSegment from "./ScheduleSegment";
import type { ScheduleSegmentProps } from "./ScheduleSegment";

const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
const hours = Array.from({ length: 16 }, (_, i) => 7 + i); // 7:00 a 22:00

interface ScheduleProps {
  courses: ScheduleSegmentProps[];
  selectedIndex?: number | null;
  onSelectSegment?: (index: number) => void;
  onRemoveSegment?: (index: number) => void;
}

const Schedule: React.FC<ScheduleProps> = ({ courses, selectedIndex, onSelectSegment, onRemoveSegment }) => {
  return (
    <div className="relative w-full bg-white" style={{ minHeight: 700, height: 700 }}>
      <div
        className="grid rounded-xl border border-blue-200 overflow-hidden"
        style={{
          gridTemplateColumns: `80px repeat(7, 1fr)`,
          gridTemplateRows: `40px repeat(${hours.length}, 40px)` // +1 row for header
        }}
      >
        {/* Esquina superior izquierda */}
        <div className="bg-blue-200 text-xs flex items-center justify-center font-bold border-b border-blue-200 border-r rounded-tl-xl" style={{ gridColumn: 1, gridRow: 1 }}>Hora</div>
        {/* Días */}
        {days.map((d, i) => (
          <div key={d} className="border-b border-blue-200 text-xs flex items-center justify-center font-semibold bg-blue-900 text-white" style={{ gridColumn: i + 2, gridRow: 1 }}>{d}</div>
        ))}
        {/* Horas */}
        {hours.map((h, i) => (
          <div key={h} className="border-b border-blue-100 text-xs flex items-center justify-center font-semibold bg-blue-200 text-blue-900" style={{ gridColumn: 1, gridRow: i + 2 }}>{h}:00</div>
        ))}
        {/* Cursos */}
        {courses.map((c, i) => (
          <ScheduleSegment
            key={i}
            {...c}
            selected={selectedIndex === i}
            onClick={() => onSelectSegment && onSelectSegment(i)}
            onRemove={() => onRemoveSegment && onRemoveSegment(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Schedule;
