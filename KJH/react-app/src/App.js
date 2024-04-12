import styles from "./App.module.css"
import Header from "./Header.js"
import Button from "./components/Button.js"
import ListContainer from "./ListContainer.js"
import Footer from "./Footer.js"
import axios from "axios"

function App() {
  async function getData() {
    const data = await axios.get(
      `https://api.github.com/repos/facebook/react/issues`,
    )
    console.log({ data })
  }

  getData()
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
