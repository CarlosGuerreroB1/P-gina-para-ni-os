const board = document.getElementById("board");
const message = document.getElementById("message");

let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];

function initializeBoard() {
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement("div");
        cell.addEventListener("click", () => makeMove(i));
        board.appendChild(cell);
    }
}

function makeMove(index) {
    if (gameBoard[index] === "") {
        gameBoard[index] = currentPlayer;
        updateBoard();
        if (checkWinner()) {
            message.textContent =` ¡Jugador ${currentPlayer} ha ganado!`;
            disableBoard();
        } else if (gameBoard.every(cell => cell !== "")) {
            message.textContent = "¡Empate!";
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
            message.textContent = `Turno del Jugador ${currentPlayer}`;
        }
    }
}

function updateBoard() {
    const cells = board.children;
    for (let i = 0; i < 9; i++) {
        cells[i].textContent = gameBoard[i];
    }
}

function checkWinner() {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    return winningCombos.some(combo => {
        const [a, b, c] = combo;
        return gameBoard[a] !== "" && gameBoard[a] === gameBoard[b] && gameBoard[b] === gameBoard[c];
    });
}

function disableBoard() {
    for (let i = 0; i < 9; i++) {
        board.children[i].removeEventListener("click", () => makeMove(i));
    }
}

function resetGame() {
    currentPlayer = "X";
    gameBoard = ["", "", "", "", "", "", "", "", ""];
    message.textContent = "Turno del Jugador X";
    enableBoard();
    updateBoard();
}

function enableBoard() {
    for (let i = 0; i < 9; i++) {
        board.children[i].addEventListener("click", () => makeMove(i));
    }
}

initializeBoard();