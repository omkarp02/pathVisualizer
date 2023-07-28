export const START_NODE_ROW = 10;
export const START_NODE_COL = 15;
export const FINISH_NODE_ROW = 10;
export const FINISH_NODE_COL = 35;
export const row = 22;
export const column = 55;



// export const START_NODE_ROW = 0;
// export const START_NODE_COL = 0;
// export const FINISH_NODE_ROW = 3;
// export const FINISH_NODE_COL = 3;
// export const row = 4;
// export const column = 4;


export const animationVisitedNodeSpeedTime = 5
export const animationShortestPathSpeedTime = 60

export const createGrid = (algo) => {
  const tempGrid = [];
  for (let i = 0; i < row; i++) {
    const currentRow = [];
    for (let j = 0; j < column; j++) {
      currentRow.push(createNode({col: j, row: i, algo}));
    }
    tempGrid.push(currentRow);
  }
  return tempGrid;
};


export const resetGridByCond = (grid, state, algo) => {
  const tempGrid = [];
  for (let i = 0; i < row; i++) {
    const currentRow = [];
    for (let j = 0; j < column; j++) {
      const cell = grid[i][j]
      const condObj = {
        all: {col: j, row: i, algo},
        withoutWall: {col: j, row: i, algo, wall: cell.isWall},
        keepWallAndWeight: {col: j, row: i, algo, wall: cell.isWall, weight: cell.weight}
      }
      currentRow.push(createNode(condObj[state]));
    }
    tempGrid.push(currentRow);
  }
  return tempGrid;
}

export const createNode = ({col, row, algo, wall, weight}) => {

  const nodeObj = {
    col,
    row,
    distance: Infinity,
    prevNode: null,
    isVisited: false,
    state: null,
    isWall: wall ? true : false,
    weight: weight ? weight : 1,
  }

  // if(algo === 'astar') nodeObj.h = Infinity
  if(algo === 'astar') nodeObj.f = Infinity

  return nodeObj;
};
