function CheckMatrix(matrix, k) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] > k) {
                matrix[i][j] = undefined;
            }
        }
    }
    return matrix;
}

const k = 6;
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]];

  const resultMatrix = CheckMatrix(matrix, k);

  for (const row of resultMatrix) {
    console.log(row.join(' '));
  }