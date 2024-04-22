import clsx from "clsx"
import React from "react"

import styles from "./OpenClosedFilters.module.css"

function OpenClosedFilter({ state, onClick, selected }) {
  return (
    <span
      className={clsx(styles.textFilter, { [styles.selected]: selected })}
      onClick={onClick}
      role="button"
    >
      {state}
    </span>
  )
}

export default function OpenClosedFilters({ isOpenMode, onClickMode }) {
  return (
    <>
      <OpenClosedFilter
        state="Open"
        selected={isOpenMode}
        onClick={() => onClickMode("open")}
      />
      <OpenClosedFilter
        state="Closed"
        selected={!isOpenMode}
        onClick={() => onClickMode("closed")}
      />
    </>
  )
}
