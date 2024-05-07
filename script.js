
let humanScore = 0 ;
let  computerScore= 0 ;

            
function getComputerChoice(){
    
    let ramdom= Math.floor(Math.random()*3)+1; // mat floor round the number down, math random generates a number between 0 and 1, multiply by 3, max value now is 2, add one to bring up to 3.
            
     if (ramdom == 1){
        return "rock" ;
     }else if (ramdom == 2) {
         return "paper" ;
    } else {
        return "scissors" ;
            }  
}

function getPlayerChoice(){
    const btnPlayerChoice = document.querySelectorAll("button");
            
        btnPlayerChoice.forEach((button) => {
         button.addEventListener("click", () => {
         const playerChoice = button.id;
         const compSelection = getComputerChoice();
         playRound(playerChoice, compSelection);
            }) ;
         });
}           

        function playRound(playerChoice,compChoice){
  
            if (playerChoice === compChoice){
                 console.log (`${playerChoice} and ${compChoice} means a tie!`);
  
            } else if (playerChoice === "rock" && compChoice === "scissors") {
                console.log (`${playerChoice} win against ${compChoice} !`);
                 humanScore+=1;
        
            } else if (playerChoice === "paper" && compChoice === "rock"){
                console.log (`${playerChoice} win against ${compChoice} !`);
                 humanScore+=1;
        
            }else if (playerChoice === "scissors" && compChoice === "paper") {
                console.log (`${playerChoice} win against ${compChoice} !`);
                 humanScore+=1;
        
            } else {
                console.log (`${playerChoice} loses against ${compChoice} !`);
                computerScore+=1;;
            }

            const winner = document.querySelector("#winner")
            const playerScore = document.querySelector("#playerScore")
            const compScore = document.querySelector("#compScore")
                playerScore.textContent = "Player score: " + humanScore;
                compScore.textContent= "Machine score: " + computerScore;
                if ( humanScore == 5) {
                    winner.textContent = `Congratulations! PLayer wins with a score of ${humanScore}`;
                    return;
                } else if ( computerScore == 5){
                    winner.textContent = `Sorry! the machine wins with a score of ${computerScore}`;
                    return;
                }
        }
            
getPlayerChoice();



