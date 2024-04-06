import Badge from "./Badge"
import styles from "./ListItem.module.css"
import ListItemLayout from "./ListItem_Layout"

const ListItem = ({checked, onChangeCheckBox, onclickTitle, badges}) => {
  return (
    <>
      <ListItemLayout>
        <div>
          <div role="buton" onClick={onclickTitle} className={styles.title}>
            issue example
            {badges &&
              badges.map((badgeProps, idx) => (
                <Badge key={idx} {...badgeProps} />
              ))}
          </div>
          <div className={styles.description}># Description</div>
        </div>
      </ListItemLayout>
    </>
  )
}

export default ListItem
