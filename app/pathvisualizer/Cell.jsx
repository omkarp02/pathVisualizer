import React, { memo } from "react";
import styles from "./index.module.css";
import { MdOutlineNotStarted } from "react-icons/md";
import { FaFlagCheckered, FaWeightHanging } from "react-icons/fa";
import { GiBrickWall } from "react-icons/gi";
import Image from "next/image";

const Cell = ({
  node,
  startEnd,
  setStartEnd,
  dragStart,
  setDragStart,
  setDragState,
  dragState,
  updateWall,
  arrowDirection,
  weight,
  addWeight,
}) => {
  const start =
    startEnd.start.row === node.row && startEnd.start.col === node.col
      ? true
      : "";
  const end =
    startEnd.end.row === node.row && startEnd.end.col === node.col ? true : "";

  const onMouseDownFn = (e) => {
    if (start) {
      setDragStart(true);
      setDragState("start");
    } else if (end) {
      setDragStart(true);
      setDragState("end");
    } else if (weight.flag) {
      setDragStart(true);
      setDragState("weight");
      addWeight(node.row, node.col, weight.weight);
    } else {
      setDragStart(true);
      setDragState("wall");
      updateWall(node.row, node.col);
    }
  };

  const onMouseEnterFn = (e, node) => {
    if (dragStart && (dragState === "start" || dragState === "end")) {
      if (node.isWall || node.weight > 1) return;
      setStartEnd((prev) => {
        prev[dragState] = { row: node.row, col: node.col };
        return { ...prev };
      });
    } else if (dragStart && dragState === "wall" && !start && !end) {
      updateWall(node.row, node.col);
    } else if (dragStart && dragState === "weight" && !start && !end) {
      addWeight(node.row, node.col, weight.weight);
    }
  };

  const onMouseUpFn = () => {
    setDragStart(false);
    setDragState(null);
  };

  return (
    <div
      onMouseDown={onMouseDownFn}
      onMouseUp={onMouseUpFn}
      onMouseEnter={(e) => onMouseEnterFn(e, node)}
      draggable={false}
      onDragStart={(e) => e.preventDefault()}
      className={`${styles.cell}`}
      style={{ backgroundColor: "transparent" }}
    >
      {start ? (
        <div
          draggable={false}
          className={styles.startEnd}
        >
          <Image
            src="/start2.svg"
            width={22}
            height={22}
            className={`position-absolute ${styles.startArrow} ${styles.startEndImg} ${styles[arrowDirection]}`}
            style={{ userSelect: "none" }}
            alt="Picture of the author"
          />
        </div>
      ) : (
        ""
      )}
      {end ? (
        <div
          draggable={false}
          className={styles.startEnd}
        >
          <Image
            src="/finish4.svg"
            width={22}
            height={22}
            className={`position-absolute ${styles.startEndImg}`}
            style={{ userSelect: "none" }}
            alt="Picture of the author"
          />
        </div>
      ) : (
        ""
      )}
      {node.weight > 1 ? (
        <div
          draggable={false}
          id={`${node.row}-${node.col}-cell`}
          className={styles.weight}
        >
          <Image
            src="/weight1.svg"
            width={25}
            height={25}
            style={{ top: "-2px", left: "-2px", userSelect: "none" }}
            className={`position-absolute`}
            alt="Picture of the author"
          />
          <div className={`position-absolute ${styles.weightText}`}>
            {node.weight}
          </div>
        </div>
      ) : (
        ""
      )}
      {node.isWall ? (
        <div
          id={`${node.row}-${node.col}-cell`}
          draggable={false}
          className={styles.wall}
        >
          <Image
            src="/wall.svg"
            width={23}
            height={24}
            className="position-absolute"
            style={{ userSelect: "none", top: '-1px', left: '-1' }}
            alt="Picture of the author"
          />
        </div>
      ) : (
        ""
      )}

      {!node.isWall && node.weight === 1 && !start && !end ? (
        <div
          id={`${node.row}-${node.col}-cell`}
          className={`${styles.insideCell}`}
        ></div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Cell;
