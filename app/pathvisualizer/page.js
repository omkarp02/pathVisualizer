"use client";

import {
  FINISH_NODE_COL,
  FINISH_NODE_ROW,
  START_NODE_COL,
  START_NODE_ROW,
  animationSpeedTime,
  createGrid,
  resetGridVisitedAndDistance,
  time,
} from "@/utils/helper";
import { useEffect, useState } from "react";
import styles from "./index.module.css";
import {
  dijkstra,
  getNodesInShortestPathOrder,
  prevNodesInShortestPathOrder,
} from "@/utils/algoritms/dijkstra";

import Cell from "./Cell";
import Navbar from "./Navbar";
import SecondNavbar from "./secondNavbar";

let wallNodeList = [];

export default function PathVisualizer() {
  const startEndInitialState = {
    start: { row: START_NODE_ROW, col: START_NODE_COL },
    end: { row: FINISH_NODE_ROW, col: FINISH_NODE_COL },
  };
  const visitedStyle = `${styles.cell} ${styles.visited}`;
  const shortestPathStyle = `${styles.cell} ${styles.shortestPath}`;

  let [grid, setGrid] = useState([]);
  const [startEnd, setStartEnd] = useState(startEndInitialState);
  const [dragStart, setDragStart] = useState(false);
  const [dragState, setDragState] = useState(null);
  const [algorithmInitialized, setAlgorithmInitialized] = useState(false);

  const initializeGrid = () => {
    const tempGrid = createGrid();
    setGrid(tempGrid);
  };

  const resetGrid = (state, onlyCss) => {
    const resetObj = {
      visited: visitedStyle,
      reset: "reset",
    };
    for (let row of grid) {
      for (let cell of row) {
        if(cell.isWall) continue;
        const node = document.getElementById(`${cell.row}-${cell.col}-cell`);
        if (node.className === resetObj[state] || resetObj[state] === "reset") {
          node.className = styles.cell;
        }
      }
    }
    if (!onlyCss) {
      initializeGrid();
      setAlgorithmInitialized(false);
    }
  };

  const animateShortestPath = (nodesInShortestPathOrder, animate) => {
    for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
      const node = nodesInShortestPathOrder[i];
      if (animate) {
        setTimeout(() => {
          document.getElementById(`${node.row}-${node.col}-cell`).className =
            shortestPathStyle;
        }, i * animationSpeedTime);
      } else {
        document.getElementById(`${node.row}-${node.col}-cell`).className =
          shortestPathStyle;
      }
    }
  };

  const animateNodes = (
    visitedNodesInOrder,
    nodesInShortestPathOrder,
    animate
  ) => {
    for (let i = 0; i <= visitedNodesInOrder.length; i++) {
      if (i === visitedNodesInOrder.length) {
        if (animate) {
          setTimeout(() => {
            animateShortestPath(nodesInShortestPathOrder, animate);
          }, i * animationSpeedTime);
        } else {
          animateShortestPath(nodesInShortestPathOrder, animate);
        }
      } else {
        const node = visitedNodesInOrder[i];
        if (animate) {
          setTimeout(() => {
            document.getElementById(`${node.row}-${node.col}-cell`).className =
              visitedStyle;
          }, i * animationSpeedTime);
        } else {
          document.getElementById(`${node.row}-${node.col}-cell`).className =
            visitedStyle;
        }
      }
    }
  };

  const runAlgo = (animate) => {
    grid = resetGridVisitedAndDistance(grid);
    resetGrid("reset", true);
    const { start, end } = startEnd;
    const startNode = grid[start.row][start.col];
    const finishNode = grid[end.row][end.col];
    const visitedNodesInOrder = dijkstra(grid, startNode, finishNode);
    const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
    animateNodes(visitedNodesInOrder, nodesInShortestPathOrder, animate);
    if (!algorithmInitialized) setAlgorithmInitialized(true);
  };

  const updateWall = () => {
    setGrid((prev)=>{
      for(const node of wallNodeList){
        prev[node.row][node.col].isWall = node.isWall
      }
      return prev;
    })
    wallNodeList.length = 0;
  };

  useEffect(() => {
    initializeGrid();
  }, []);

  useEffect(() => {
    if (algorithmInitialized) {
      runAlgo(false);
    }
  }, [startEnd]);

  return (
    <>
      <Navbar runAlgo={()=> runAlgo(true)} />
      <SecondNavbar reset={()=> resetGrid("reset")}  />
      <div className={styles.mainDiv}>
        <div className={styles.gridContainer}>
          {grid.map((cols, colIndex) => {
            return (
              <div key={`${colIndex}row`} className={styles.row}>
                {cols.map((node) => {
                  return (
                    <Cell
                      key={`${node.row}-${node.col}-col`}
                      node={node}
                      startEnd={startEnd}
                      setStartEnd={setStartEnd}
                      setDragStart={setDragStart}
                      setDragState={setDragState}
                      wallNodeList={wallNodeList}
                      dragState={dragState}
                      dragStart={dragStart}
                      updateWall={updateWall}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
