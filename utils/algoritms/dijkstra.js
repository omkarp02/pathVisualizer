import { Heap } from "./heap";

export const dijkstra = (grid, src, dest) => {
  const visitedNodesInOrder = [];
  const unVisitedNodes = new Heap()
  src.distance = 0;
  unVisitedNodes.insert(src, 'distance')

  while(!unVisitedNodes.isEmpty()){
    const curNode = unVisitedNodes.pop('distance')
    
    if(curNode.isWall) continue
    if(curNode.distance === Infinity) {
      return visitedNodesInOrder;
    }
    curNode.isVisited = true
    visitedNodesInOrder.push(curNode)
    if(curNode.row  === dest.row && curNode.col === dest.col) {
      return visitedNodesInOrder;
    }
    updateUnvisitedNodeNeighbor(curNode, grid, unVisitedNodes, dest)
  }
  return visitedNodesInOrder;
};

export let prevNodesInShortestPathOrder = null

const updateUnvisitedNodeNeighbor = (curNode, grid, unVisitedNodes, dest) => {
    const {row, col} = curNode
    const neighbors = []
    if(row > 0) neighbors.push(grid[row - 1][col])
    if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
    if (col > 0) neighbors.push(grid[row][col - 1]);
    if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);

    for(let node of neighbors){
        if(!node.isVisited && node.distance > (curNode.distance + Number(curNode.weight) )){
            node.distance = curNode.distance + Number(curNode.weight) 
            node.prevNode = curNode
            unVisitedNodes.insert(node, 'distance')
        }
    }
}


export function getNodesInShortestPathOrder(finishNode) {
  const nodesInShortestPathOrder = [];
  let currentNode = finishNode;
  while (currentNode !== null) {
    nodesInShortestPathOrder.unshift(currentNode);
    currentNode = currentNode.prevNode;
  }
  prevNodesInShortestPathOrder = nodesInShortestPathOrder
  return nodesInShortestPathOrder;
}