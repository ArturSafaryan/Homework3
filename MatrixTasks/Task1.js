function findIndexOfMaxSum(matrix) {
    if (matrix.length === 0 || matrix[0].length === 0) {
      return -1;
    }
  
    let maxSum = Number.NEGATIVE_INFINITY;
    let maxSumIndex = -1;
  
    for (let i = 0; i < matrix.length; i++) {
      let rowSum = 0;
      for (let j = 0; j < matrix[i].length; j++) {
        rowSum += matrix[i][j];
      }
      
      if (rowSum > maxSum) {
        maxSum = rowSum;
        maxSumIndex = i;
      }
    }
    return maxSumIndex;
  }
  
  const matrix = [
    [12, -2, 62],
    [16, 47, 1, 101],
    [-4, 38]
  ];
  
  const indexWithMaxSum = findIndexOfMaxSum(matrix);
  console.log(`Index with the largest sum of elements: ${indexWithMaxSum}`);
  