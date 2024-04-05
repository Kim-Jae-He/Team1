import { useState, useEffect } from "react"
import Button from "./components/Button"
import styles from "./ListContainer.module.css"
import ListItem from "./components/ListItem"

const ListContainer = () => {
  const [inputValue, setInputValue] = useState("is:pr is:open")

  useEffect(() => {
    console.log({ inputValue })
  }, [inputValue])
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
        <div className={styles.container}>
            <ListItem />
        </div>
      </div>
    </>
  )
}

export default ListContainer
