export const mazeGeneratorAlgo = (grid, startEnd) => {
  const {start, end} = startEnd
  grid[end.row][end.col].visited = true
  const traversingNodes = [grid[start.row][start.col]];
  const wallNodesInOrder = [];
  while (traversingNodes.length !== 0) {
    const length = traversingNodes.length - 1;
    const curNode = traversingNodes[length];
    curNode.visited = true;
    if (traversingNodes.length) {
      getNeighbors(curNode, traversingNodes, grid, wallNodesInOrder);
    }
  }
  return wallNodesInOrder;
};

const getNeighbors = (curNode, traversingNodes, grid, wallNodesInOrder) => {
  if (!curNode) return null;
  const { row, col } = curNode;
  const neighbors = {};
  let count = 0;
  if (row > 0 && !grid[row - 1][col].visited && !grid[row - 1][col].isWall)
    neighbors[++count] = { direction: "up", node: grid[row - 1][col] };
  if (
    row < grid.length - 1 &&
    !grid[row + 1][col].visited &&
    !grid[row + 1][col].isWall
  )
    neighbors[++count] = { direction: "down", node: grid[row + 1][col] };
  if (col > 0 && !grid[row][col - 1].visited && !grid[row][col - 1].isWall)
    neighbors[++count] = { direction: "left", node: grid[row][col - 1] };
  if (
    col < grid[0].length - 1 &&
    !grid[row][col + 1].visited &&
    !grid[row][col + 1].isWall
  )
    neighbors[++count] = { direction: "right", node: grid[row][col + 1] };

  const neighborsLength = Object.keys(neighbors).length;
  if (neighborsLength) {
    const randomNumber = getRandomNumber(neighborsLength);
    traversingNodes.push(neighbors[randomNumber].node);
    setWall(neighbors, neighbors[randomNumber].direction, wallNodesInOrder);
    return neighbors[randomNumber].node;
  } else {
    traversingNodes.pop();
    return getNeighbors(
      traversingNodes[traversingNodes.length - 1],
      traversingNodes,
      grid
    );
  }
};

const setWall = (neighbors, direction, wallNodesInOrder) => {
  let flag = ["right", "left"];
  if (direction === "right" || direction === "left") {
    flag = ["up", "down"];
  }
  for (let key in neighbors) {
    if (
      flag[0] === neighbors[key].direction ||
      flag[1] === neighbors[key].direction
    ) {
      neighbors[key].node.isWall = true;
      wallNodesInOrder.push(neighbors[key].node);
    }
  }
};

function getRandomNumber(range) {
  const randomDecimal = Math.random();
  const scaledNumber = randomDecimal * range;
  return Math.floor(scaledNumber) + 1;
}
