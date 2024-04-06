import styles from "./App.module.css"
import Header from "./Header.js"
import Button from "./components/Button.js"
import ListContainer from "./ListContainer.js"
import Footer from "./Footer.js"

function App() {
  return (
    <>
      <div className={styles.nav}>Nav </div>
      <Header />
      <ListContainer />
      <Footer />
    </>
  )
}

export default App

