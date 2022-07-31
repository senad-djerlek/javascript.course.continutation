const gameData = [
    [0,0,0],
    [0,0,0],
    [0,0,0],
];


let editedPlayer = 0;
let activePlayer = 0;

const players = [
    {
        name: "",
        symbol : "X"
    },
    {
        name: "",
        symbol: "O"
    },
];

const playerConfigOverlayElement = document.getElementById("config-overlay");
const backDropElement = document.getElementById("backdrop");
const formElement = document.querySelector("form");
const errorsOutputElement = document.getElementById("config-errors")
const gameAreaElement = document.getElementById("active-game");
const activePlayerNameElement = document.getElementById("active-player-name");


const editPlayer1BtnElement = document.getElementById("edit-player-1-btn");
const editPlayer2BtnElement = document.getElementById("edit-player-2-btn");
const cancelConfigBtnElement = document.getElementById("cancel-config-btn");
const startNewGameBtnElement = document.getElementById("start-game-btn");
const gameBoardElement = document.getElementById("game-board");
// const gameFiledElements = document.querySelectorAll("#game-board li");



editPlayer1BtnElement.addEventListener("click", openPlayerConfig);
editPlayer2BtnElement.addEventListener("click", openPlayerConfig);

cancelConfigBtnElement.addEventListener("click", closePlayerConfig);

backDropElement.addEventListener("click", closePlayerConfig);

formElement.addEventListener("submit",savePlayerConfig);

startNewGameBtnElement.addEventListener("click", startNewGame);

// for (const gameFiledElement of gameFiledElements) {
//     gameFiledElement.addEventListener("click", selectGameField);
// }

gameBoardElement.addEventListener("click", selectGameField);
