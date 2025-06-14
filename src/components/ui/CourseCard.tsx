export interface CourseData {
  style: string;
  courseID?: string;
  courseName: string;
  group?: number;
  teacher?: string;
}

export default function CourseCard(props: CourseData) {
  return (
    <div className={props.style}>
      <h1>{props.courseID}</h1>
      <h1>{props.courseName}</h1>
      <h2>{props.group}</h2>
      <h2>{props.teacher}</h2>
    </div>
  );
}
