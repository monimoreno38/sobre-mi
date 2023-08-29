document.addEventListener("DOMContentLoaded", function () {
  const playerName = document.getElementById("playerName");
  const playButton = document.getElementById("play");
  const message = document.getElementById("message");
  const playerChoice = document.querySelectorAll(".playerChoice");
  let playerChoiceValue = "";
  const refresh = document.getElementById("Refresh");
  const pcChoice = document.getElementById("pcChoice");
  const final = document.getElementById("Final");
  const ROCK = "Piedra";
  const PAPER = "Papel";
  const SCISSORS = "Tijeras";
  let playerNameValue = playerName.value;
  let USER_WINS = "Gana El Usuario";
  const PC_WINS = "Gana la computadora";
  const DRAW = "EMPATE!!!";
  let score;
  let plays = 1;
  let playerCount = 0;
  let PCCount = 0;

  playerChoice.forEach(function (button) {
    button.addEventListener("click", function () {
      playerChoice.forEach(function (otherButton) {
        otherButton.classList.remove("Selected");
      });

      button.classList.add("Selected");
    });
  });

  playerChoice.forEach((button) => {
    button.addEventListener("click", function () {
      const buttonId = this.id; 

      if (buttonId == "ROCK") {
        playerChoiceValue = "Piedra";
      }
      if (buttonId == "PAPER") {
        playerChoiceValue = "Papel";
      }
      if (buttonId == "SCISSORS") {
        playerChoiceValue = "Tijeras";
      }
    });
  });

  function PCRandom() {
    let num = Math.random() * 3;
    let round = Math.round(num);
    let PC;
    if (round == 0) {
      PC = ROCK;
    } else if (round == 1) {
      PC = PAPER;
    } else PC = SCISSORS;
    return PC;
  }

  playButton.addEventListener("click", function () {
    if (plays >= 5) {
      playButton.disabled = true;
      playButton.classList.add("ERROR");
      if (PCCount > playerCount) {
        final.classList.add("FINAL");
        final.innerHTML = PC_WINS;
      }
      if (PCCount < playerCount) {
        final.classList.add("FINAL");
        final.innerHTML = USER_WINS;
      }
      if (PCCount === playerCount) {
        final.classList.add("FINAL");
        final.innerHTML = DRAW;
      }
    } else playerNameValue = playerName.value; 
    let error = "";
    USER_WINS = `Gana ${playerNameValue.toUpperCase()}`;
    if (playerNameValue === "") {
      message.classList.add("error"); 
      error += `Has Olvidado Ingresar Tu Nombre....<br>`;
    }
    if (playerChoiceValue == "") {
      message.classList.add("error"); 
      error += `Selecciona Tu Opcion!!.<br>`;
    }
    if (error !== "") {
      message.innerHTML = error;
    } else {
      message.classList.remove("error"); 
      message.innerHTML = `${playerNameValue.toUpperCase()} Tu eleccion Fue: ${playerChoiceValue}`; 
      let PC = PCRandom();
    
      if (PC == playerChoiceValue) {
        score = DRAW;
        messageScore.innerHTML = score;
      } else if (
        (playerChoiceValue == ROCK && PC == SCISSORS) ||
        (playerChoiceValue == SCISSORS && PC == PAPER) ||
        (playerChoiceValue == PAPER && PC == ROCK)
      ) {
        score = USER_WINS;
        playerCount += 1;
        messageScore.innerHTML = score;
      } else {
        score = PC_WINS;
        PCCount += 1;
        messageScore.innerHTML = score;
      }
      pcChoice.innerHTML = `La Eleccion de la Computadora fue:  ${PC}`;
      document.getElementById(
        "playerWin"
      ).innerHTML = `${playerNameValue.toUpperCase()}: ${playerCount}`;
      document.getElementById("PCWin").innerHTML = `PC: ${PCCount}`;
      document.getElementById("plays").innerHTML = `Partido N°: ${plays}`;
      plays += 1;
    }
  });

  refresh.addEventListener("click", function () {
    message.innerHTML = "";
    messageScore.innerHTML = "";
    document.getElementById("pcChoice").innerHTML = "Eleccion de la Computadora....";
    document.getElementById("playerName").value = "";
    playerChoice.forEach(function (button) {
      button.classList.remove("Selected"); 
    });
    playerChoiceValue = "";
    document.getElementById("playerWin").innerHTML = "";
    document.getElementById("PCWin").innerHTML = "";
    PCCount = 0;
    playerCount = 0;
    playButton.disabled = false;
    plays = 1;
    document.getElementById("plays").innerHTML = "";
    playButton.classList.remove("ERROR");
    document.getElementById("FINAL").innerHTML = "";
    final.classList.remove("FINAL");
  });
});
