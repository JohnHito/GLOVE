import type {ScheduleSegmentProps} from "./ScheduleSegment";
//import CourseCard from './CourseCard';

interface ScheduleProps {
  style: string;
  header: string[];
  hours: string[];
  data: ScheduleSegmentProps[];
}

export default function Schedule(props: ScheduleProps) {
  return (
    <div className={props.style}>
      <div>Lunes martes...

        <div>Contenedor

          <div>Columna horas</div>
          
          <div>Aqui Irian los cursos</div>

        </div>
      </div>
    </div>
  );
}
