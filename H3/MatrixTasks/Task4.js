
function flipMatrix(matrix) {

  let flippedMatrix = [[],[],[]];

  const numRows = matrix.length;
  const numCols = matrix[0].length;

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      flippedMatrix[j][i] = matrix[i][j];
    }
  }

  return flippedMatrix;
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const flippedMatrix = flipMatrix(matrix);

for (const row of flippedMatrix) {
  console.log(row.join(' '));
}