import styles from "./ListItem.module.css"

const ListItem = (checked, onChangeCheckBox, onclickTitle) => {
  return (
    <>
      <div className={styles.wrapper}>
        <input
          type="checkbox"
          className={styles.checkbox}
          value={checked}
          onChange={onChangeCheckBox}
        />
        <div>
          <div onClick={onclickTitle} className={styles.title}>
            issue example
          </div>
          <div className={styles.description}># Description</div>
        </div>
      </div>
    </>
  )
}

export default ListItem
