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
  }, [view]);

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
      className="bg-blue-50 rounded-2xl shadow p-2"
    >
      <div className="flex items-center justify-between gap-4 mb-4 relative">
        <button
          onClick={handlePrev}
          className="w-10 h-10 text-2xl font-bold bg-blue-200 hover:bg-blue-400 text-blue-900 rounded-full flex items-center justify-center transition-colors shadow border border-blue-300"
          aria-label="Mes anterior"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <h2 className="text-3xl font-bold text-center capitalize min-w-[180px] text-blue-900 mx-auto absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-fit pointer-events-none">
          {monthName}
        </h2>
        <div className="flex items-center gap-2 min-w-[140px] justify-end relative z-10">
          {!isCurrentMonth && (
            <button
              onClick={handleToday}
              className="w-20 h-10 text-base font-bold bg-blue-300 hover:bg-blue-500 text-blue-900 rounded-full flex items-center justify-center transition-colors border border-blue-400 shadow mr-2"
            >
              Hoy
            </button>
          )}
          <button
            onClick={handleNext}
            className="w-10 h-10 text-2xl font-bold bg-blue-200 hover:bg-blue-400 text-blue-900 rounded-full flex items-center justify-center transition-colors shadow border border-blue-300"
            aria-label="Mes siguiente"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
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
        height={700}
        contentHeight={700}
        dayMaxEventRows={3}
        eventColor="#2563eb"
        eventTextColor="#fff"
        dayHeaderClassNames="bg-blue-900 text-white font-bold"
        dayCellClassNames="bg-white border-blue-100"
      />
    </div>
  );
};

export default Calendar;
