let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".image")

const genCompChoice = ()=>{
    let options = ["rock","paper","scissor"]
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const playGame = (userChoice)=>{

    console.log(`User choice = ${userChoice}`);
    //Gen comp choice
    const comChoice = genCompChoice();
    console.log(`Computer choice = ${comChoice}`);
    let msg = document.querySelector("#msg");
    let msgBox = document.querySelector("#Message");
    if(userChoice === comChoice){
        console.log("GAME DRAW");
        msg.innerText = "GAME DRAW";
        msgBox.style.backgroundColor = "yellow";
        msg.style.color = "black";
    }
}

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        let userChoice = choice.getAttribute("id");
        console.log(`${userChoice} was clicked`);
        playGame(userChoice);
    });
})