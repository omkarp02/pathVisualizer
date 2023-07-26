import React, { memo } from "react";
import styles from "./index.module.css";
import { MdOutlineNotStarted } from "react-icons/md";
import { FaFlagCheckered } from "react-icons/fa";

const Cell = ({
  node,
  startEnd,
  setStartEnd,
  dragStart,
  setDragStart,
  setDragState,
  dragState,
  wallNodeList,
  updateWall,
}) => {
  const wallStyle = `${styles.cell} ${styles.wall}`;
  const start =
    startEnd.start.row === node.row && startEnd.start.col === node.col
      ? true
      : "";
  const end =
    startEnd.end.row === node.row && startEnd.end.col === node.col ? true : "";

  const onMouseDownFn = () => {
    if (start) {
      setDragStart(true);
      setDragState("start");
    } else if (end) {
      setDragStart(true);
      setDragState("end");
    } else {
      setDragStart(true);
      setDragState("wall");
      toggleWall()
    }
  };

  const toggleWall = () => {
    const cell = document.getElementById(`${node.row}-${node.col}-cell`);
    if (cell.className === wallStyle) {
      const index = wallNodeList.findIndex((e) => e.row === node.row && e.col === node.col)
      if(index !== -1 ){
        wallNodeList[index].isWall = false
      }else{
        node.isWall = false
        wallNodeList.push(node)
      }
      cell.className = styles.cell;
    } else {
      cell.className = wallStyle;
      node.isWall = true
      wallNodeList.push(node)
    }
  };

  // const onClickHandler = () => {
  //   if(!start && !end) {
  //     toggleWall();
  //   }
  // }

  const onMouseEnterFn = (e, node) => {
    if (dragStart && (dragState === "start" || dragState === "end")) {
      setStartEnd((prev) => {
        prev[dragState] = { row: node.row, col: node.col };
        return { ...prev };
      });
    } else if (dragStart && dragState === "wall" && !start && !end) {
      toggleWall();
    }
  };

  const onMouseUpFn = () => {
    setDragStart(false);
    if(dragState === 'wall'){
      updateWall()
    }
    setDragState(null);
  };

  return (
    <div
      id={`${node.row}-${node.col}-cell`}
      onMouseDown={onMouseDownFn}
      onMouseUp={onMouseUpFn}
      onMouseEnter={(e) => onMouseEnterFn(e, node)}
      draggable={false}
      // onClick={onClickHandler}
      onDragStart={(e) => e.preventDefault()}
      className={`${styles.cell}`}
    >
      {start ? (
        <div draggable={false} className={styles.startEnd}>
          <MdOutlineNotStarted
            draggable={false}
            className="position-absolute"
          />
        </div>
      ) : (
        ""
      )}
      {end ? (
        <div draggable={false} className={styles.startEnd}>
          <FaFlagCheckered draggable={false} className="position-absolute" />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Cell;
