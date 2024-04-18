import Badge from "./Badge"
import styles from "./ListItem.module.css"
import ListItemLayout from "./ListItem_Layout"

const ListItem = ({ checked, onClickCheckBox, onclickTitle, badges, data }) => {
  return (
    <>
      <ListItemLayout checked={checked} onClick={onClickCheckBox}>
        <div>
          <div role="buton" onClick={onclickTitle} className={styles.title}>
            {data.title}
            {badges &&
              badges.map((props, idx) => (
                <Badge key={idx} {...props} />
              ))}
          </div>
          <div className={styles.description}># Description</div>
        </div>
      </ListItemLayout>
    </>
  )
}

export default ListItem
