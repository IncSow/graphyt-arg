import clsx from "clsx";
import styles from "./Box.module.css";
export default function Box(props) {
  const { children, className, style, onClick, ref, id } = props;
  return (
    <div
      id={id}
      ref={ref}
      onClick={onClick}
      style={style}
      className={clsx(styles.terminalBox, className)}
    >
      {children}
    </div>
  );
}
