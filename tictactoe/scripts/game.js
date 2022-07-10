function startNewGame () {
    
    gameAreaElement.style.display = "block";
    activePlayerNameElement.textContent = players[activePlayer].name;

    if (players[0].name===""|| player[1].name === ""){
        alert("Please set custom player names for both players!")
        return;
    }
    // gameAreaElement.style.display = "block";
}

function switchPlayer (){
    if(activePlayer === 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }
    activePlayerNameElement.textContent = players[activePlayer].name;
}

function selectGameField (event) {
    if (event.target.tagName !== "LI"){
        return;
    }
    event.target.textContent = players[activePlayer].symbol;  
    event.target.classList.add("disabled");
    switchPlayer();
}