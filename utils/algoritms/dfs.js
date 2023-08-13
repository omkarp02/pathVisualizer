let flag = false;


export const dfs = (grid, src, dest) => {
  const visitedNodesInOrder = [];
  const curNode = src;
  updateUnvisitedNodeNeighbor(curNode, grid, visitedNodesInOrder, dest);
  flag = false;
  return visitedNodesInOrder;
};

const updateUnvisitedNodeNeighbor = (
  curNode,
  grid,
  visitedNodesInOrder,
  dest,
) => {
  if (flag) return;
  if (curNode.row === dest.row && curNode.col === dest.col) {
    flag = true;
    return;
  }
  curNode.isVisited = true;
  visitedNodesInOrder.push(curNode);
  const { row, col } = curNode;
  const neighbors = [];
  if (row > 0) neighbors.push(grid[row - 1][col]);
  if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
  if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
  if (col > 0) neighbors.push(grid[row][col - 1]);
  for (let neighbor of neighbors) {
    if (!neighbor.isVisited && !neighbor.isWall){
        updateUnvisitedNodeNeighbor(neighbor, grid, visitedNodesInOrder, dest);
    }
  }
};
