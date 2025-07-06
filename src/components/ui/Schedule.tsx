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
          gridTemplateColumns: `80px repeat(6, 1fr)`,
          gridTemplateRows: `40px repeat(${hours.length}, 40px)` // +1 row for header
        }}
      >
        {/* Esquina superior izquierda */}
        <div className="bg-blue-200 text-xs flex items-center justify-center font-bold border-b border-blue-200 border-r rounded-tl-xl" style={{ gridColumn: 1, gridRow: 1 }}>Hora</div>
        {/* Días */}
        {days.map((d, i) => (
          <div
            key={d}
            className={`border-b border-blue-200 text-xs flex items-center justify-center font-semibold bg-blue-900 text-white`}
            style={{ gridColumn: i + 1, gridRow: 1, zIndex: 20, position: 'relative' }}
          >
            {d}
          </div>
        ))}
        {/* Horas */}
        {hours.map((h, i) => (
          <div
            key={h}
            className={"border-b border-blue-100 text-xs flex items-center justify-center font-semibold bg-blue-200 text-blue-900"}
            style={{ gridColumn: 1, gridRow: i + 2 }}
          >
            {h}:00
          </div>
        ))}
        {/* Fila de almuerzo: una sola fila que cubre de Lunes a Sábado */}
        <div
          className={"bg-gray-200 border-b border-blue-200 flex items-center justify-center text-gray-700 font-bold text-xs"}
          style={{ gridColumn: 2, gridColumnEnd: 8, gridRow: 12 - 7 + 2, zIndex: 20, position: 'relative' }}
        >
          ALMUERZO
        </div>
        {/* Líneas divisoras entre columnas de días */}
        {[1,2,3,4,5].map(i => (
          <div
            key={"divider-"+i}
            style={{
              gridColumn: i+2,
              gridRow: 1,
              gridRowEnd: hours.length+2,
              zIndex: 10,
              pointerEvents: 'none',
              position: 'relative'
            }}
            className="border-l-2 border-blue-50"
          />
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
