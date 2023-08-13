import { useState } from "react";
import styles from "./button.module.css";
import Image from "next/image";
import RealButton from "./realButton";

const algorithmOptions = [
  { label: "dijkstra", value: "dijkstra" },
  { label: "A-star", value: "astar" },
  { label: "A-star on steriods", value: "astar_on_steriod" },
  { label: "DFS", value: "dfs" },
];

const CustomButton = ({
  text,
  customClassname,
  variant,
  border = 0,
  color = "white",
  onClick,
  setAlgorithm,
  algorithm,
  show,
  setShow,
}) => {
  return (
    <>
      <div className={styles.customButtonContainer}>
        <div className={styles.wrapper}>
          <div
            className={`${styles.algoList} ${
              show ? styles.increaseHeight : ""
            } `}
          >
            {algorithmOptions.map((e) => {
              return (
                <div
                  key={e.value}
                  className={`text-center ${
                    algorithm === e.value ? "text-orange" : ""
                  }`}
                  onClick={() => {
                    setAlgorithm(e.value);
                  }}
                >
                  {e.label}
                </div>
              );
            })}
          </div>
          <button
            data-content={text}
            onClick={() => {
              setShow(false);
              onClick();
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
