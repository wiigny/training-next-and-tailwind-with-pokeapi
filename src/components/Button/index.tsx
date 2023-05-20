import { MouseEventHandler, ReactNode } from "react";

interface IButton {
  children: ReactNode;
  type: "button" | "reset" | "submit" | undefined;
  id?: string;
  click?: MouseEventHandler<HTMLButtonElement>;
  classes?: string;
}

export default function Button({
  id,
  type,
  children,
  click,
  classes,
}: IButton) {
  return (
    <button id={id} type={type} onClick={click} className={classes}>
      {children}
    </button>
  );
}
