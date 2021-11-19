import React from "react"
import styles from "./Roadmap.module.css"
import RoadmapElement from "./RoadmapElement"

function Roadmap() {
  return (
    <div className={styles.roadmap}>
      <div className={styles.container}>
        <h2 className={styles.header}>Roadmap</h2>
        <RoadmapElement time="Q3 2021"></RoadmapElement>
      </div>
    </div>
  )
}

export default Roadmap
