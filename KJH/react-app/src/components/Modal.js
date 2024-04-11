import { useState, useEffect } from "react"
import styles from "./Modal.module.css"

import clsx from "clsx"

const Modal = ({
  opened,
  title,
  onClose,
  placeholder,
  searchDateList,
  onClickCell,
}) => {
  const [searchValue, setSearchValue] = useState("")
  const [filteredData, setFilteredData] = useState(searchDateList)

  useEffect(() => {
    setFilteredData(searchDateList.filter((item) => item === searchValue))
  }, [searchDateList, searchValue])

  return (
    <div className={clsx(styles.modal, { [styles.opened]: opened })}>
      <div className={styles.header}>
        <span>{title}</span>
        <button className={styles.exex} onClick={onClose}>X</button>
      </div>

      <div className={styles.input}>
        <input
          placeholder={placeholder}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      {filteredData.map((data) => (
        <div key={data} onClick={onClickCell} role="button">
          {data}
        </div>
      ))}
    </div>
  )
}

export default Modal
