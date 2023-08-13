import { astar } from "./astar";
import { dfs } from "./dfs";
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
    visitedNodesInOrder = astar(grid, startNode, finishNode, 1);
  } else if (algorithm === "astar_on_steriod") {
    visitedNodesInOrder = astar(grid, startNode, finishNode, 7);
  } else if(algorithm === 'dfs'){
    visitedNodesInOrder = dfs(grid, startNode, finishNode);
  }

  if(algorithm !== 'dfs'){
    nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
  }
  return { visitedNodesInOrder, nodesInShortestPathOrder };
};
