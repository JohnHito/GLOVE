import type { CourseCard } from "./CourseCard";

export interface ScheduleSegmentProps {
  style: string;
  course: typeof CourseCard;
}

export default function ScheduleSegment(props: ScheduleSegmentProps) {
  return <div className={props.style}></div>;
}
