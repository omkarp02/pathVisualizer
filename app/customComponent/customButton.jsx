import { useState } from "react";
import styles from "./button.module.css";
import Image from "next/image";
import RealButton from "./realButton";

const algorithmOptions = [
  { label: "Dijkstra", value: "dijkstra" },
  { label: "A-star", value: "astar" },
  { label: "A-star on steriod", value: "astar_on_steriod" },
  { label: "DFS", value: "dfs" },
];

const CustomButton = ({
  text,
  customClassname,
  variant,
  border = 0,
  color = "white",
  runAlgo,
  setAlgorithm,
  algorithm,
  show,
  setShow,
}) => {
  return (
    <>
      <div className={styles.customButtonContainer} onMouseOver={()=> setShow(true)} onMouseLeave={()=> setShow(false)}>
        <div className={styles.wrapper}>
          <div
            className={`${styles.algoList} ${
              show ? styles.increaseHeight : ""
            } `}
          >
            {algorithmOptions.map((e, i) => {
              return (
                <div
                  key={e.value}
                  className={`text-center ${styles.algoItem} ${
                    algorithm === e.value ? "text-orange" : ""
                  }`}
                  onClick={() => {
                    setAlgorithm(e.value);
                    runAlgo(e.value);
                  }}
                >
                  {i !== algorithmOptions.length - 1 ? (
                    <>
                      <span className={styles.roundedStylesSpan1}></span>
                      <span className={styles.roundedStylesSpan2}></span>
                      <span className={styles.roundedStylesSpan3}></span>
                      <span className={styles.roundedStylesSpan4}></span>
                      <span className={styles.roundedStylesSpan5}></span>
                      <span className={styles.roundedStylesSpan6}></span>
                    </>
                  ) : (
                    ""
                  )}
                  {e.label}
                </div>
              );
            })}
          </div>
          <button
            data-content={text}
            onClick={() => {
              setShow((prev) => !prev);
            }}
            className={`${styles.custombutton} `}
          >
            {text}
          </button>
        </div>
      </div>
    </>
  );
};

export default CustomButton;
