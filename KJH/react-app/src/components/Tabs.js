import styles from "./Tabs.module.css"
import cx from "clsx"
import React, { useState } from "react"

const tabList = ["Code", " Issues", "Pull Request"]

export default function Tabs() {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0)
  return (
    <ul className={styles.tabList}>
      {tabList.map((tab, idx) => (
        <Tab
          key={`${idx}`}
          title={tab}
          selected={selectedTabIndex === idx}
          onClick={() => setSelectedTabIndex}
        />
      ))}
    </ul>
  )
}

function Tab({ title, number, selected, onClick }) {
  return (
    <li>
      <button
        onClick={onClick}
        className={cx(styles.tab, { [styles.selected]: selected })}
      >
        <span>{title}</span>
        {number && <div className={styles.circle}></div>}
      </button>
    </li>
  )
}
