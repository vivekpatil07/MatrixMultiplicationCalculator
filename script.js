// script.js
function createMatrix(matrixType) {
    const rowsInput = parseInt(document.getElementById(`rows${matrixType}`).value);
    const colsInput = parseInt(document.getElementById(`cols${matrixType}`).value);

    if (isNaN(rowsInput) || isNaN(colsInput)) {
        alert('Please enter valid dimensions for the matrix.');
        return;
    }

    const matrix = [];

    for (let i = 0; i < rowsInput; i++) {
        matrix[i] = [];
        for (let j = 0; j < colsInput; j++) {
            const value = parseFloat(prompt(`Enter value for Matrix ${matrixType} at position (${i + 1}, ${j + 1}):`));
            matrix[i][j] = isNaN(value) ? 0 : value;
        }
    }

    // Display the matrix on the webpage
    const matrixElement = document.getElementById(`matrix${matrixType}`);
    matrixElement.innerHTML = matrix.map(row => `[${row.join(', ')}]`).join('<br>');
}

function multiplyMatrices() {
    const matrixA = getMatrix('A');
    const matrixB = getMatrix('B');

    if (!validateMatrices(matrixA, matrixB)) {
        alert('Invalid matrix dimensions for multiplication.');
        return;
    }

    const resultMatrix = multiply(matrixA, matrixB);

    // Display the result matrix on the webpage
    const resultMatrixElement = document.getElementById('resultMatrix');
    resultMatrixElement.innerHTML = resultMatrix.map(row => `[${row.join(', ')}]`).join('<br>');
}

function validateMatrices(matrixA, matrixB) {
    return matrixA[0].length === matrixB.length;
}

function getMatrix(matrixType) {
    const rowsInput = parseInt(document.getElementById(`rows${matrixType}`).value);
    const colsInput = parseInt(document.getElementById(`cols${matrixType}`).value);

    if (isNaN(rowsInput) || isNaN(colsInput)) {
        alert('Please enter valid dimensions for the matrix.');
        return [];
    }

    const matrix = [];

    for (let i = 0; i < rowsInput; i++) {
        matrix[i] = [];
        for (let j = 0; j < colsInput; j++) {
            const value = parseFloat(prompt(`Enter value for Matrix ${matrixType} at position (${i + 1}, ${j + 1}):`));
            matrix[i][j] = isNaN(value) ? 0 : value;
        }
    }

    return matrix;
}

document.getElementById('matrixA').innerHTML = matrixA.map(row => `[${row.join(', ')}]`).join('<br>');
document.getElementById('matrixB').innerHTML = matrixB.map(row => `[${row.join(', ')}]`).join('<br>');

// Multiply matrices A and B
const resultMatrix = multiply(matrixA, matrixB);

// Display the result matrix on the webpage
document.getElementById('resultMatrix').innerHTML = resultMatrix.map(row => `[${row.join(', ')}]`).join('<br>');

// Function to multiply matrices
function multiply(matrixA, matrixB) {
    const result = [];

    for (let i = 0; i < matrixA.length; i++) {
        result[i] = [];
        for (let j = 0; j < matrixB[0].length; j++) {
            result[i][j] = 0;
            for (let k = 0; k < matrixA[0].length; k++) {
                result[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }

    return result;
}