import { twMerge } from "tailwind-merge";

interface ButtonProps {
  text: string;
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  on_click?: (e: any) => void;
  ID?: string;
}

const Button = ({ text, className = "", on_click, ID }: ButtonProps) => (
  <button
    className={twMerge(
      "group relative overflow-hidden grid place-items-center  rounded-[20px] px-1 py-1",
      className
    )}
    data-id={ID || "s"}
    onClick={on_click}
  >
    <div className="pointer-events-none  absolute group-hover:translate-y-[-200%] duration-500">
      {text}
    </div>
    <div className="pointer-events-none translate-y-[200%] absolute group-hover:translate-y-[-5%] duration-500">
      {text}
    </div>
  </button>
);

export default Button;
