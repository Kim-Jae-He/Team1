import styles from "./App.module.css"
import Header from "./Header.js"
import Button from "./components/Button.js"
import ListContainer from "./ListContainer.js"

function App() {
  return (
    <>
      <div className={styles.nav}>Nav </div>
      <Header />
      <ListContainer/>
      
      <div className={styles.footer}>footer</div>
    </>
  )
}

export default App
