import { useState } from "react";
import styles from "./button.module.css";
import Image from "next/image";
import RealButton from "./realButton";

const algorithmOptions = [
  { label: "dijkstra", value: "dijkstra" },
  { label: "astar", value: "astar" },
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
  setShow
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
              setShow(false)
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
