let matrix = [
    [10, 20, 30, 40, 50],
    [5, 15, 25, 35, 45],
    [60, 70, 80, 90, 100],
    [2, 4, 6, 8, 10],
    [55, 45, 35, 25, 15],
    [100, 90, 80, 70, 60]
];

function SmallestValuesInMatrix(matrix) {
    const smallestValues = [];

    for (let i = 0; i < matrix.length; i++) {
        let smallest = matrix[i][0];

        for (let j = 1; j < matrix[i].length; j++) {
            if (matrix[i][j] < smallest) {
                smallest = matrix[i][j];
            }
        }

        smallestValues.push(smallest);
    }

    return smallestValues;
}

const smallestValues = SmallestValuesInMatrix(matrix);
console.log(smallestValues);
