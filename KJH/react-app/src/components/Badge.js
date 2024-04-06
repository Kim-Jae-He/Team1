import styles from "./Badge.module.css";
import clsx from "clsx"; 

const Badge = ({ title, color }) => { 
  return <span className={clsx(styles.badge, styles[color])}>{title}</span>;
};

export default Badge;
