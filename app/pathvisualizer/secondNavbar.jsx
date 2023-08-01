import React, { useState } from "react";
import Button from "../customComponent/button";
import Dropdown from "../customComponent/dropdown";
import WeightButton from "../customComponent/weightButton";

const resetOptions = [
  { label: "All", value: "all" },
  { label: "Except Wall", value: "withoutWall" },
  { label: "Except Weight", value: "withoutBomb" },
  { label: "Keep Wall & Keep Weight", value: "keepWallAndWeight" },
];

const weightOptions = Array.from({ length: 9 }, (_, index) => {
  return { label: `${index + 2}`, value: Number(index + 2) };
});

const algorithmOptions = [
  { label: "dijkstra", value: "dijkstra" },
  { label: "astar", value: "astar" },
];

const SecondNavbar = ({
  setAlgorithm,
  algorithm,
}) => {



  return (
    <div className="d-flex">
      
    </div>
  );
};

export default SecondNavbar;
