import type { ReactNode } from "react";

interface Btn_Types {
  btn_func?: () => void;
  txt: string;
  icon?: ReactNode;
  btn_styles?: string;
  left?: boolean;
  right?: boolean;
  iconStyle?: string;
}

export default function Btn({
  btn_func,
  txt,
  icon,
  btn_styles,
  left,
  right,
  iconStyle,
}: Btn_Types) {
  return (
    <button onClick={btn_func} className={btn_styles}>
      {left && icon && <span className={iconStyle}>{icon}</span>}
      {txt}
      {right && icon && <span className={iconStyle}>{icon}</span>}
    </button>
  );
}
