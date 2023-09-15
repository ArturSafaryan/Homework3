
function IsInMatrix(matrix, word) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === word) {
                return true;
            }
        }
    }
    return false;
}

const matrix = [
    ['apple', 'banana', 'cherry'],
    ['date', 'fig', 'grape'],
    ['kiwi', 'lemon', 'mango']
];

const wordToFind = 'klubnik';
if (IsInMatrix(matrix, wordToFind)) {
    console.log(`The word ${wordToFind} exists in the matrix.`);
} else {
    console.log(`The word ${wordToFind} doesn't exist in the matrix.`);
}