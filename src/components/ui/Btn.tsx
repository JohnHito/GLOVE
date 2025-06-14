interface BtnProps {
  text: string;
  style: string;
  icon?: string;
}

export default function Btn(props: BtnProps) {
  return <button className={props.style}>{props.text}

  {props.icon && <img src={props.icon} alt="" className="w-4 h-4 mr-2" />}

  </button>;
}
