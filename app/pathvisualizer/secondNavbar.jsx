import React, { useState } from "react";
import Button from "../customComponent/button";
import Dropdown from "../customComponent/dropdown";

const resetOptions = [
  { label: "All", value: "all" },
  { label: "Except Wall", value: "withoutWall" },
  { label: "Except Weight", value: "withoutBomb" },
  { label : "Keep Wall & Keep Weight", value: "keepWallAndWeight"},
];

const weightOptions = Array.from({ length: 9 }, (_, index) => {
  return { label: `${index + 2}`, value: Number(index + 2) };
});

const algorithmOptions = [
  {label: 'dijkstra', value: 'dijkstra'},
  {label: 'astar', value: 'astar'},
]

const SecondNavbar = ({ reset, setWeight, weight, setDragState, setAlgorithm, algorithm }) => {
  const [resetValue, setResetValue] = useState("all");

  const selectChangeHandler = (e) => {
    setResetValue(e.target.value);
  };
  const selectWeightChangeHandler = (e) => {
    setWeight((prev) => {
      return { ...prev, weight: e.target.value };
    });
  };

  return (
    <div className="d-flex">
      <Dropdown
        value={resetValue}
        options={resetOptions}
        handleChange={selectChangeHandler}
      />
      <Button text={"reset"} size={"sm"} onClick={() => reset(resetValue)} />
      <Dropdown
        value={weight.weight}
        options={weightOptions}
        handleChange={selectWeightChangeHandler}
      />
      <Button
        withCancel={true}
        value={weight.flag}
        text={"Weight"}
        size={"sm"}
        onClick={() => {
          if (weight.flag) setDragState(null);
          setWeight((prev) => {
            return { ...prev, flag: !prev.flag };
          });
        }}
      />
      <Dropdown
        value={algorithm}
        options={algorithmOptions}
        handleChange={(e)=> {console.log(e.target.value); setAlgorithm(e.target.value)}}
      />
    </div>
  );
};

export default SecondNavbar;
