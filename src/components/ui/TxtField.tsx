interface TxtFieldProps {
    text: string
    style: string
}

export default function TxtField(props: TxtFieldProps) {
  return <div className={props.style}>{props.text}</div>;
}