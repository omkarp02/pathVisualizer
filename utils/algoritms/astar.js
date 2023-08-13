//so in dijsktra we determin short path by the distance only right but in astar there is a formula
// f = g + h where g stands for the distance and h stand for heuristics means intellectual path to the end node

import { Heap } from "./heap";

export const astar = (grid, src, dest, pow) => {
  let openSet = [];
  let closedSet = [];
  const visitedNodes = [];
  src.distance = 0;
  openSet.push(src);

  while (openSet.length !== 0) {
    //find the node with the lowest f value
    let winner = 0;
    if (openSet.length > 1) {
      for (let i = 1; i < openSet.length; i++) {
        const winnerF = openSet[winner].distance + openSet[winner].h + openSet[winner].weight;
        const normalF = openSet[i].distance + openSet[i].h + openSet[i].weight;
        if (normalF < winnerF) {
          winner = i;
        }
      }
    }
    const current = openSet[winner];
    visitedNodes.push(current);

    if (current.row === dest.row && current.col === dest.col) {
      return visitedNodes;
    }

    closedSet.push(current);

    //remove current from openSet
    removeCurrent(openSet, current);

    //updating the neighbour of the current node
    updateUnvisitedNodeNeighbor(current, grid, closedSet, openSet, dest, pow);
  }

  return visitedNodes;
};

const updateUnvisitedNodeNeighbor = (
  curNode,
  grid,
  closedSet,
  openSet,
  dest, 
  pow
) => {
  const { row, col } = curNode;
  const neighbors = [];
  if (row > 0) neighbors.push(grid[row - 1][col]);
  if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
  if (col > 0) neighbors.push(grid[row][col - 1]);
  if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);

  for (let node of neighbors) {
    if (node.isWall) continue;
    const index = closedSet.findIndex(
      (e) => e.row === node.row && e.col === node.col
    );
    if (index === -1) {
      let g = curNode.distance + 1;
      const openIndex = openSet.findIndex(
        (e) => e.row === node.row && e.col === node.col
      );
      let newPath = false;
      if (openIndex !== -1) {
        if (g < node.distance) {
          node.distance = g;
          newPath = true;
        }
      } else {
        newPath = true;
        node.distance = g;
        openSet.push(node);
      }

      if (newPath) {
        node.h = heuristic(node, dest, pow);
        node.prevNode = curNode;
      }
    }
  }
};

const heuristic = (node, end, pow) => {
  return Math.pow(Math.abs(node.row - end.row) + Math.abs(node.col - end.col), pow);
};

const removeCurrent = (openSet, current) => {
  const index = openSet.findIndex(
    (e) => e.row === current.row && e.col === current.col
  );
  if (index !== -1) {
    openSet.splice(index, 1);
  }
};


/*
export const astar = (grid, src, dest) => {
  const visitedNodesInOrder = [];
  const unVisitedNodes = new Heap();

  src.distance = 0;
  unVisitedNodes.insert(src, "f");

  while (!unVisitedNodes.isEmpty()) {
    const curNode = unVisitedNodes.pop("f");

    if (curNode.isWall) continue;

    curNode.isVisited = true;
    visitedNodesInOrder.push(curNode);
    if (curNode.row === dest.row && curNode.col === dest.col) {
      return visitedNodesInOrder;
    }
    updateUnvisitedNodeNeighbor(curNode, grid, unVisitedNodes, dest);
  }
  return visitedNodesInOrder;
};

const updateUnvisitedNodeNeighbor = (curNode, grid, unVisitedNodes, dest) => {
  const { row, col } = curNode;
  const neighbors = [];
  if (row > 0) neighbors.push(grid[row - 1][col]);
  if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
  if (col > 0) neighbors.push(grid[row][col - 1]);
  if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);

  for (let node of neighbors) {
    if (node.isWall || node.isVisited) continue;
    const g = curNode.distance + 1;
    if (g < node.distance) {
      node.distance = g;
      node.f = heuristic(node, dest) + node.distance;
      unVisitedNodes.insert(node, "f");
      node.prevNode = curNode;
    }
  }
};

const heuristic = (node, end) => {
  return Math.abs(node.row - end.row) + Math.abs(node.col - end.col);
};
*/



