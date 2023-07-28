import { astar } from "./astar";
import { dijkstra, getNodesInShortestPathOrder } from "./dijkstra";

export const findThePathFromStartToFinish = (
  grid,
  startNode,
  finishNode,
  algorithm
) => {
  let visitedNodesInOrder = [];
  let nodesInShortestPathOrder = [];
  if (algorithm === "dijkstra") {
    visitedNodesInOrder = dijkstra(grid, startNode, finishNode);
  } else if (algorithm === "astar") {
    visitedNodesInOrder = astar(grid, startNode, finishNode);
  }
  nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);

  return { visitedNodesInOrder, nodesInShortestPathOrder };
};
