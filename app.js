let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".image");
const msg = document.querySelector("#msg");
const msgBox = document.querySelector("#Message");
const userScoreEl = document.querySelector("#u_id"); // Fixed ID
const compScoreEl = document.querySelector("#c_id"); // Fixed ID
const restartBtn = document.querySelector("#restart");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    return options[Math.floor(Math.random() * options.length)];
};

const determineWinner = (userChoice, comChoice) => {
    if (userChoice === comChoice) return "draw";
    if (
        (userChoice === "rock" && comChoice === "scissor") ||
        (userChoice === "paper" && comChoice === "rock") ||
        (userChoice === "scissor" && comChoice === "paper")
    ) {
        return "win";
    }
    return "lose";
};

const updateScores = () => {
    userScoreEl.innerText = userScore; // Update only the score numbers
    compScoreEl.innerText = compScore;
};

const resetGame = () => {
    userScore = 0;
    compScore = 0;
    updateScores();
    msg.innerText = "Game reset! Start playing.";
    msgBox.style.backgroundColor = "lightgray";
    msg.style.color = "black";
};

const playGame = (userChoice) => {
    const comChoice = genCompChoice();
    console.log(`User choice: ${userChoice}`);
    console.log(`Computer choice: ${comChoice}`);

    const result = determineWinner(userChoice, comChoice);
    switch (result) {
        case "draw":
            msg.innerText = "It's a Draw!";
            msgBox.style.backgroundColor = "yellow";
            msg.style.color = "black";
            break;
        case "win":
            msg.innerText = "You Win!";
            msgBox.style.backgroundColor = "green";
            msg.style.color = "white";
            userScore++;
            break;
        case "lose":
            msg.innerText = "You Lose!";
            msgBox.style.backgroundColor = "red";
            msg.style.color = "white";
            compScore++;
            break;
    }
    updateScores();
    console.log(`User Score: ${userScore}, Computer Score: ${compScore}`);
};

// Event listener for choices
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log(`${userChoice} was clicked`);
        playGame(userChoice);
    });
});

// Event listener for restart button
restartBtn.addEventListener("click", resetGame);

// Initialize the game
updateScores();
resetGame();
