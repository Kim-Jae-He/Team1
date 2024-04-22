import { useState, useEffect } from "react"
import Button from "./components/Button"
import styles from "./ListContainer.module.css"
import ListItem from "./components/ListItem"
import ListItemLayout from "./components/ListItem_Layout"
import clsx from "clsx"
import axios from "axios"
import Pagination from "./components/Pagination"
import OpenClosedFilters from "./components/OpenClosedFilters"
import ListFilter from "./components/ListFilter"
import { GITHUB_API } from "./api"

const ListContainer = () => {
  const [inputValue, setInputValue] = useState("is:pr is:open")
  const [checked, setChecked] = useState(false)
  const [list, setList] = useState([])
  const [page, setPage] = useState(1)
  const [isOpenMode, setIsOpenMode] = useState(true)

  async function getData(params) {
    const data = await axios.get(
      `${GITHUB_API}/repos/facebook/react/issues`,
      params,
    )
    setList(data.data)
  }
  useEffect(() => {
    getData(page, isOpenMode)
  }, [page, isOpenMode])

  const handleModeChange = (isOpen) => {
    setIsOpenMode(isOpen)
    setPage(1) // 페이지를 1로 재설정하여 첫 페이지부터 데이터를 가져오도록 함
  }

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
        <OpenClosedFilters
          isOpenMode={isOpenMode}
          onClickMode={handleModeChange}
        />
        <ListItemLayout className={styles.listfilter}>
          <ListFilter onChangeFilter={(filterData) => {}} />
        </ListItemLayout>
        {list &&
          list.map((item) => (
            <ListItem
              key={item.id}
              data={item}
              checked={checked}
              onClickCheckBox={() => setChecked((checked) => !checked)}
            />
          ))}
      </div>

      <div className={styles.paginationContainer}>
        <Pagination
          maxPage={10}
          currentPage={page}
          onClickPageButton={(number) => setPage(number)}
        />
      </div>
    </>
  )
}

export default ListContainer
