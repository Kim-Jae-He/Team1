import styles from "./ListItem.module.css"
import ListItemLayout from "./ListItem_Layout"

const ListItem = (checked, onChangeCheckBox, onclickTitle) => {
  return (
    <>
      <ListItemLayout>
        <div>
          <div role="buton" onClick={onclickTitle} className={styles.title}>
            issue example
          </div>
          <div className={styles.description}># Description</div>
        </div>
      </ListItemLayout>
    </>
  )
}

export default ListItem
