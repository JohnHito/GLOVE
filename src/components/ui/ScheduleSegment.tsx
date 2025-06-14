import type { CourseData } from './CourseCard';

interface ScheduleSegmentProps {
    style: string;
    courses: CourseData;
}

export default function ScheduleSegment(props: ScheduleSegmentProps) {
  return <div className={props.style}>
    
  </div>
}