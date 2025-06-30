/*export interface CourseData {
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
}*/


import React from "react";

export interface CourseCardProps {
  code: string;
  name: string;
  group: string;
  schedule: string[];
  color?: "blue" | "teal" | "orange" | "peach" | "green";
}

const colorMap = {
  blue: "#01BCD2",
  teal: "#95D3C5",
  orange: "#FFA366",
  peach: "#FFD7B0",
  green: "#47BC82",
};

export const CourseCard: React.FC<CourseCardProps> = ({
  code,
  name,
  group,
  schedule,
  color = "blue",
}) => {
  return (
    <div
      style={{
        background: colorMap[color],
        borderRadius: 15,
        color: "white",
        padding: "12px 18px",
        marginBottom: 14,
        minWidth: 250,
        boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
      }}
    >
      <div style={{ fontSize: 13, fontWeight: "bold" }}>{code}</div>
      <div style={{ fontSize: 17, fontWeight: 700 }}>{name}</div>
      <div style={{ fontSize: 12, fontWeight: 500, marginBottom: 4 }}>{group}</div>
      <div>
        {schedule.map((h, i) => (
          <div key={i} style={{ fontSize: 12, lineHeight: 1.1 }}>
            {h}
          </div>
        ))}
      </div>
    </div>
  );
};
