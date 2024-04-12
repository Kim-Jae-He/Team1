import { useState, useEffect } from "react"
import styles from "./Pagination.module.css"

import clsx from "clsx"

const Pagination = ({ currentPage, maxPage, onClickPageButton }) => {
  const PageButton = ({ number, onClick, selected }) => {
    return (
      <button
        className={clsx(styles.button, { [styles.selected]: selected })}
        onClick={() => onClick(number)}
      >
        {number}
      </button>
    )
  }

  return (
    <div>
      <button
        className={clsx(styles.button, styles.blueButton)}
        disabled={currentPage === 1}
      >
        {`< Previous`}
      </button>
      {new Array(maxPage).fill(null).map((_, i) => (
        <PageButton
          number={i + 1}
          onClick={onClickPageButton}
          selected={i + 1 === currentPage}
        />
      ))}
      <button
        className={clsx(styles.button, styles.blueButton)}
        disabled={currentPage === maxPage}
      >
        {"Next >"}
      </button>
    </div>
  )
}

export default Pagination
