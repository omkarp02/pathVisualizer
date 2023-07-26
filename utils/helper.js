export const START_NODE_ROW = 10;
export const START_NODE_COL = 15;
export const FINISH_NODE_ROW = 10;
export const FINISH_NODE_COL = 35;
export const row = 20;
export const column = 50;
export const animationSpeedTime = 5

// export const START_NODE_ROW = 0;
// export const START_NODE_COL = 0;
// export const FINISH_NODE_ROW = 3;
// export const FINISH_NODE_COL = 3;
// export const row = 4;
// export const column = 4;

export const createGrid = () => {
  const tempGrid = [];
  for (let i = 0; i < row; i++) {
    const currentRow = [];
    for (let j = 0; j < column; j++) {
      currentRow.push(createNode(j, i));
    }
    tempGrid.push(currentRow);
  }
  return tempGrid;
};

export const createNode = (col, row) => {
  return {
    col,
    row,
    distance: Infinity,
    prevNode: null,
    isVisited: false,
    state: null,
  };
};
