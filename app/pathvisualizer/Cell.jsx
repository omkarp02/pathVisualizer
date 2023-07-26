import React from "react";
import styles from "./index.module.css";
import { MdOutlineNotStarted } from "react-icons/md";
import { FaFlagCheckered } from "react-icons/fa";

const Cell = ({ node, startEnd, setStartEnd, dragStart, setDragStart }) => {
  const start = startEnd.start.row === node.row && startEnd.start.col === node.col ? styles.start : "";
  const end = startEnd.end.row === node.row && startEnd.end.col === node.col ? styles.start : "" ? styles.end : "";

  const onMouseDownFn = () => {
    if(start){
      setDragStart(true)
    }
    
  }

  const onMouseEnterFn = (e, node) => {
    if(dragStart){
      setStartEnd((prev)=>{
        prev.start = {row: node.row, col: node.col}
        return {...prev}
      })
    }
  }

  const onMouseUpFn = () => {
      setDragStart(false)
  }


  return (
    <div
      id={`${node.row}-${node.col}-cell`}
      onMouseDown={onMouseDownFn}
      onMouseUp={onMouseUpFn}
      onMouseEnter={(e)=> onMouseEnterFn(e, node)}
      draggable={false}
      onDragEnd={onMouseUpFn}
      className={`${styles.cell} `}
    >
      {start ? (
        <div className={styles.startEnd}>
          <MdOutlineNotStarted className="position-absolute" />
        </div>
      ) : (
        ""
      )}
      {end ? (
        <div className={styles.startEnd}>
          <FaFlagCheckered className="position-absolute" />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Cell;
