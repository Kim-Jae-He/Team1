import styles from "./Badge.module.css"

const Badge = ({ name, color }) => {
  const badgeStyle = {
    background: `#${color}`,
  }

  return (
    <span className={styles.badge} style={badgeStyle}>
      {name}
    </span>
  )
}

export default Badge
