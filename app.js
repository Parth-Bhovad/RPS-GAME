let userScore = 0;
let compScore = 0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const newGame = document.querySelector(".newGame");

const genCompChoice = () => {
     const options = ["rock" , "paper" , "scissors"];
     const randIdx = Math.floor(Math.random() *3);
     return options[randIdx];
}

const gameDraw = () => {
    console.log("Game was draw");
    msg.innerText = `Game was draw . Play agian .`;
    msg.style.backgroundColor = "#081b31"
}

const showWinner = (userWin , userChoice , CompChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win ! Your ${userChoice} beats computer's ${CompChoice} .`;
        msg.style.backgroundColor = "green";

    }else {
        compScore++;
        compScorePara.innerText = compScore ;
        msg.innerText = `You lose. Computer's ${CompChoice} beats your ${userChoice} . `;
        msg.style.backgroundColor = "red"
    }
}

const playGame = (userChoice) => {
       
    console.log("user choice =" , userChoice);
       const CompChoice = genCompChoice();
       console.log("comp choice =" , CompChoice);

       if(userChoice === CompChoice){
        gameDraw();
       }else{
        let userWin = true;
          if(userChoice === "rock"){
           userWin = CompChoice === "paper" ? false : true ;
          } else if (userChoice === "paper"){
           userWin = CompChoice === "scissors" ? false : true ;
          } else {
            userWin = CompChoice === "rock" ? false : true ;
          }
          showWinner(userWin , userChoice , CompChoice);
       }
}

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click" , () => {
        const userChoice = choice.getAttribute("id") ;
        playGame(userChoice);
        
        
    });
});

const newBtn = () => {
    userScore = 0;
    compScore = 0;
    userScorePara.innerText = userScore;
    compScorePara.innerText = compScore ;
    msg.innerText = "Play Your Move";
    msg.style.backgroundColor = "#081b31"
}

newGame.addEventListener("click" , newBtn);