import { useState, useEffect } from "react"
import Button from "./components/Button"
import styles from "./ListContainer.module.css"
import ListItem from "./components/ListItem"
import ListItemLayout from "./components/ListItem_Layout"
import clsx from "clsx"
import axios from "axios"
import Modal from "./components/Modal"
import Pagination from "./components/Pagination"

const ListContainer = () => {
  const [inputValue, setInputValue] = useState("is:pr is:open")
  const [checked, setChecked] = useState(false)
  const [list, setList] = useState([])
  const [page, setPage] = useState(1)

  async function getData() {
    const { data } = await axios.get(
      `https://api.github.com/repos/facebook/react/issues`,
    )
    setList(data.data)
  }
  useEffect(() => {
    getData()
  }, [])

  const OpenClosedFilter = ({ size, state, Onclick, selected }) => {
    return (
      <>
        <span
          role="button"
          className={clsx(styles.textFilter, {
            [styles.selected]: selected,
          })}
          onClick={Onclick}
        >
          {size} {state}
        </span>
      </>
    )
  }

  const OpenClosedFilters = ({ data }) => {
    const [isOPenMode, setIsOPenMode] = useState(true)

    const openModeDataSize = 1
    const closedModeDataSize = 2
    return (
      <>
        <OpenClosedFilter
          size={openModeDataSize}
          state="Open"
          selected={isOPenMode}
          Onclick={() => setIsOPenMode(true)}
        />
        <OpenClosedFilter
          size={closedModeDataSize}
          state="Closed"
          selected={!isOPenMode}
          Onclick={() => setIsOPenMode(false)}
        />
      </>
    )
  }

  const ListFilterItem = ({ children }) => {
    const [showModal, setShowModal] = useState(false)

    return (
      <div className={styles.filterItem}>
        <span
          className={styles.arrows}
          role="button"
          onClick={() => setShowModal(true)}
        >
          {children} ▼
        </span>
        {showModal && (
          <div className={styles.modalContainer}>
            <Modal
              opened={showModal}
              onClose={() => setShowModal(false)}
              placeholder="필터"
              searchDateList={["버그", "레이블", "애플"]}
              onClickCell={() => {
                // 필터 변경 로직을 여기에 구현하세요
                console.log("필터 클릭!")
                setShowModal(false) // 작업 후 모달 닫기
              }}
            />
          </div>
        )}
      </div>
    )
  }

  const ListFilter = () => {
    // 필요에 따라 onChangeFilter를 올바르게 처리하세요
    return (
      <div className={styles.filterlist}>
        <ListFilterItem>Author</ListFilterItem>
        <ListFilterItem>Label</ListFilterItem>
        <ListFilterItem>프로젝트</ListFilterItem>
        <ListFilterItem>Milestones</ListFilterItem>
        <ListFilterItem>Assignee</ListFilterItem>
        <ListFilterItem>Sort</ListFilterItem>
      </div>
    )
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
        <OpenClosedFilters />
        <ListItemLayout className={styles.listfilter}>
          <ListFilter onChangeFilter={(filterData) => {}} />
        </ListItemLayout>
        {list.map((item) => (
          <ListItem
            key={item.id}
            data={item}
            checked={checked}
            onClickCheckBox={() => setChecked((checked) => !checked)}
            badges={[{ title: "Bug", color: "red" }]}
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
