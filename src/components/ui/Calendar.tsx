import React, { useRef, useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

interface CalendarProps {
  view: "dayGridMonth" | "dayGridWeek" | "dayGridDay";
  events: any[];
  onDateClick?: (arg: { dateStr: string }) => void;
}

const Calendar: React.FC<CalendarProps> = ({ view, events, onDateClick }) => {
  const calendarRef = useRef<FullCalendar | null>(null);
  const [monthName, setMonthName] = useState<string>("");

  // Actualiza el nombre del mes según la fecha actual del calendario
  const updateMonthName = () => {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      const date = calendarApi.getDate();
      setMonthName(
        date.toLocaleString("default", { month: "long", year: "numeric" })
      );
    }
  };

  useEffect(() => {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      if (["dayGridDay", "dayGridWeek", "dayGridMonth"].includes(view)) {
        calendarApi.changeView(view);
      }
      updateMonthName();
    }
    // eslint-disable-next-line
  }, [view]);

  // Actualizar el mes cuando se navega
  const handlePrev = () => {
    if (calendarRef.current) {
      calendarRef.current.getApi().prev();
      updateMonthName();
    }
  };
  const handleNext = () => {
    if (calendarRef.current) {
      calendarRef.current.getApi().next();
      updateMonthName();
    }
  };
  const handleToday = () => {
    if (calendarRef.current) {
      calendarRef.current.getApi().today();
      updateMonthName();
    }
  };

  // Saber si estamos en el mes actual
  const isCurrentMonth = (() => {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      const date = calendarApi.getDate();
      const now = new Date();
      return (
        date.getFullYear() === now.getFullYear() &&
        date.getMonth() === now.getMonth()
      );
    }
    return true;
  })();

  return (
    <div
      id={
        view === "dayGridMonth"
          ? "month"
          : view === "dayGridWeek"
          ? "week"
          : "day"
      }
    >
      <div className="flex items-center justify-between gap-4 mb-4">
        <div className="flex items-center gap-4">
          <button
            onClick={handlePrev}
            className="w-12 h-12 text-2xl font-bold bg-blue-100 hover:bg-blue-300 rounded-full flex items-center justify-center transition-colors"
            dangerouslySetInnerHTML={{ __html: "&#8592;" }}
          />
          <h2 className="text-2xl font-bold text-center capitalize min-w-[120px]">
            {monthName}
          </h2>
          <button
            onClick={handleNext}
            className="w-12 h-12 text-2xl font-bold bg-blue-100 hover:bg-blue-300 rounded-full flex items-center justify-center transition-colors"
            dangerouslySetInnerHTML={{ __html: "&#8594;" }}
          />
        </div>
        {!isCurrentMonth && (
          <button
            onClick={handleToday}
            className="w-12 h-12 text-base font-bold bg-blue-200 hover:bg-blue-400 rounded-full flex items-center justify-center transition-colors border border-blue-400"
          >
            Hoy
          </button>
        )}
      </div>
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView={view}
        events={events}
        firstDay={1}
        headerToolbar={false}
        datesSet={updateMonthName}
        dateClick={onDateClick}
      />
    </div>
  );
};

export default Calendar;
