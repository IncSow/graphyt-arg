import clsx from "clsx";
import styles from "./Box.module.css";
export default function Box(props) {
  const { children, className, style, onClick } = props;
  return (
    <div
      onClick={onClick}
      style={style}
      className={clsx(styles.terminalBox, className)}
    >
      {children}
    </div>
  );
}
