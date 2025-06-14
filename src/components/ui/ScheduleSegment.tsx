import type { CourseData } from './CourseCard';

export interface ScheduleSegmentProps {
    style: string;
    course: CourseData;
}

export default function ScheduleSegment(props: ScheduleSegmentProps) {
  return <div className={props.style}>
    
  </div>
}