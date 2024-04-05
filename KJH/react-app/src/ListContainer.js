import { useState } from "react"
import Button from "./components/Button"
import styles from "./ListContainer.module.css"
import ListItem from "./components/ListItem"
import ListItemLayout from "./components/ListItem_Layout"

const ListContainer = () => {
  const [inputValue, setInputValue] = useState("is:pr is:open")

  return (
    <>
      <div className={styles.listContainer}>
        <div className={styles.topSection}>
          <input
            className={styles.input}
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value)
            }}
          />
          <Button
            style={{
              fontsize: "14px",
              backgroundColor: "green",
              color: "white",
            }}
          >
            New Issue
          </Button>
        </div>
        <ListItemLayout className={styles.listfilter}>
          <div className={styles.filterlist}>
            <span>Author</span>
            <span>Label</span>
            <span>프로젝트</span>
            <span>Milestones</span>
            <span>Assignee</span>
            <span>Sort</span>
          </div>
        </ListItemLayout>
        <div className={styles.container}>
          <ListItem />
        </div>
      </div>
    </>
  )
}

export default ListContainer
