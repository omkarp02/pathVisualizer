import React, { useState } from "react";
import Button from "../customComponent/button";
import styles from "./navbar.module.css";
import CustomButton from "../customComponent/customButton";
import WeightButton from "../customComponent/weightButton";
import Image from "next/image";
import WallButton from "../customComponent/wallButton";
import RealButton from "../customComponent/realButton";

const weightOptions = Array.from({ length: 9 }, (_, index) => {
  return { label: `${index + 2}`, value: Number(index + 2) };
});

const Navbar = ({
  runAlgo,
  generateMaze,
  weight,
  setWeight,
  reset,
  algorithm,
  setAlgorithm,
}) => {
  const [resetValue, setResetValue] = useState("all");
  const [show, setShow] = useState(false);

  const selectWeightChangeHandler = (val) => {
    setWeight({ flag: true, weight: val });
  };

  const selectChangeHandler = (val) => {
    setResetValue(val);
    reset(val);
  };

  const resetOptions = [
    { label: <>All</>, value: "all" },
    {
      label: (
        <>
          <Image
            src="/wall.svg"
            width={18}
            height={18}
            alt="Picture of the author"
          />
        </>
      ),
      value: "withoutWall",
    },
    {
      label: (
        <>
          <Image
            src="/weight1.svg"
            width={22}
            height={22}
            alt="Picture of the author"
          />
        </>
      ),
      value: "withoutBomb",
    },
    {
      label: <span style={{ fontSize: "10px", fontWeight: 600 }}>both</span>,
      value: "keepWallAndWeight",
    },
  ];

  return (
    <nav className={`${styles.navbar} d-flex justify-content-between`}>
      <h4 style={{ margin: "0px" }}>Path Visualizer - {algorithm}</h4>

      <div className="d-flex align-items-center">
        <div className="d-flex px-2">
          <WeightButton
            value={weight.weight}
            options={weightOptions}
            handleChange={selectWeightChangeHandler}
            img={"/weight1.svg"}
          />
          <WallButton setWeight={setWeight} />
          <WeightButton
            value={resetValue}
            options={resetOptions}
            width={18}
            height={18}
            handleChange={selectChangeHandler}
            img={"/reset.png"}
          />
          <RealButton onClick={() => runAlgo(algorithm)} />
        </div>
        <Button text={"Generate Maze"} onClick={generateMaze} />
        <CustomButton
          color="white"
          runAlgo={(val) => {
            runAlgo(val);
          }}
          variant={"info"}
          text={"Visualize"}
          setAlgorithm={setAlgorithm}
          algorithm={algorithm}
          show={show}
          setShow={setShow}
        />
      </div>
    </nav>
  );
};

export default Navbar;
