let compChoice=0;
let humanChoice="";

function getComputerChoice(){
    
     let ramdom= Math.floor(Math.random()*3)+1; // mat floor round the number down, math random generates a number between 0 and 1, multiply by 3, max value now is 2, add one to bring up to 3.
     
     if (ramdom == 1){
        console.log("rock");

     }else if (ramdom == 2) {
        console.log("paper");

     } else {
        console.log ("scissors");
     }
     
     return compChoice = ramdom ;
}

function getHumanChoice(){

    let humnChoice=prompt("Select rock,paper, or scissors");

    return humanChoice = humnChoice ;
    
}

let humanScore = 0 ;
let  computerScore= 0 ;

function playRound(humanChoice,compChoice){
    
    if  (humanChoice.toLowerCas() !== "rock" || humanChoice.toLowerCas() !== "paper" || humanChoice.toLowerCas() !== "scissors"  ){

        return alert("Please enter a valid option")

    } else if (humanChoice.toLowerCas() === compChoice){

        return console.log (`${humanChoice} and ${compChoice} means a tie!`);

    } else if (humanChoice.toLowerCas() === "rock" && compChoice === "scissors") {
        
        console.log (`${humanChoice} win against ${compChoice} !`);
        return humanScore+=1;

    } else if (humanChoice.toLowerCas() === "paper" && compChoice === "rock"){

        console.log (`${humanChoice} win against ${compChoice} !`);
        return humanScore+=1;

    }else if (humanChoice.toLowerCas() === "scissors" && compChoice === "paper") {

        console.log (`${humanChoice} win against ${compChoice} !`);
        return humanScore+=1;

    } else {
        console.log (`${humanChoice} loses against ${compChoice} !`);
       return humanScore+=1;;
    }
}
console.log (getComputerChoice());
console.log (getHumanChoice());