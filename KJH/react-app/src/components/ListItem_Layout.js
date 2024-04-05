import styles from "./ListItem_Layout.module.css"
import cx from "clsx"

const ListItemLayout = ({ children, className }) => {
  return (
    <>
      <div className={cx(styles.wrapper, className)}>
        <input
          type="checkbox"
          className={styles.checkbox}
          // value={checked}
          //  onChange={onChangeCheckBox}
        />
        {children}
      </div>
    </>
  )
}

export default ListItemLayout
