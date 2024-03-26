import styles from "./App.module.css"

import Button from "./components/Button"

import Header from "./Header"

function App() {
  return (
    <>
      <div className={styles.nav}>Nav </div>
      <Header />
      <div className={styles.listContainer}>ListContainer</div>
      <Button
        style={{
          fontSize: "14px",
          backgroundColor: "green",
          color: "white",
        }}
      >
        New Issue
      </Button>

      <div className={styles.footer}>footer</div>
    </>
  )
}

export default App
