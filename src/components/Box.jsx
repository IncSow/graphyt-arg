import clsx from "clsx";
import styles from "./Box.module.css";
export default function Box(props) {
  const { children, className, style, onClick, ref } = props;
  return (
    <div
      ref={ref}
      onClick={onClick}
      style={style}
      className={clsx(styles.terminalBox, className)}
    >
      {children}
    </div>
  );
}
