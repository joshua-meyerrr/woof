import React from "react"
import styles from "./RoadmapElement.module.css"

function RoadmapElement({ time, children }) {
  return (
    <div className={styles.element}>
      <h3>{time}</h3>
      {children}
    </div>
  )
}

export default RoadmapElement
