let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".image")

const playGame = (userChoice)=>{

    console.log(userChoice);
}

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        let userChoice = choice.getAttribute("id");
        console.log(`${userChoice} was clicked`);
        playGame(userChoice);
    });
})