function findLargestSquare(matrix) {
    const n = matrix.length;
    let maxK = 0;
    let maxRow = 0;
    let maxCol = 0;
  
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (matrix[i][j] === 1) {
          let k = 1;
  
          while (i + k < n && j + k < n) {
            let isValidSquare = true;
  
            // Check if the square is composed of ones
            for (let x = i; x <= i + k; x++) {
              for (let y = j; y <= j + k; y++) {
                if (matrix[x][y] !== 1) {
                  isValidSquare = false;
                  break;
                }
              }
              if (!isValidSquare) break;
            }
  
            if (isValidSquare) {
              k++;
            } else {
              break;
            }
          }
  
          if (k > maxK) {
            maxK = k;
            maxRow = i;
            maxCol = j;
          }
        }
      }
    }
  
    const largestSquare = [];
    for (let i = maxRow; i < maxRow + maxK; i++) {
      largestSquare.push(matrix[i].slice(maxCol, maxCol + maxK));
    }
  
    return largestSquare;
  }
  
  // Example matrix
  const matrix = [
    [1, 0, 0, 1, 0],
    [1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1],
    [0, 1, 1, 1, 0],
    [1, 0, 1, 0, 0]
  ];
  
  const largestSquare = findLargestSquare(matrix);
  
 //console.log(largestSquare);
 for (const row of largestSquare) {
   console.log(row);
 }

  