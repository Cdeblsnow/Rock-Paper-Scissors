



let humanScore = 0 ;
let  computerScore= 0 ;



function playgame() {

    for (let i=1; i<=5; i++){ // every building block needs to be here to ensure it is called every time instead of just once

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
       
       function getHumanChoice(){
       
           let humnChoice=prompt("Select rock,paper, or scissors");
       
            return humnChoice.toLowerCase();// this method is here to ensure the comparison on the if below ignores upper case. tried to add it to every comparison but it was longer and did not work.
           
       }

            const pepe=getComputerChoice();
            const pepa = getHumanChoice();

            let humanChoice = pepa;
            let compChoice = pepe;

        function playRound(humanChoice,compChoice){
    

            if (humanChoice === compChoice){
        
                return console.log (`${humanChoice} and ${compChoice} means a tie!`);
        
            } else if (humanChoice === "rock" && compChoice === "scissors") {
                
                console.log (`${humanChoice} win against ${compChoice} !`);
                return humanScore+=1;
        
            } else if (humanChoice === "paper" && compChoice === "rock"){
        
                console.log (`${humanChoice} win against ${compChoice} !`);
                return humanScore+=1;
        
            }else if (humanChoice === "scissors" && compChoice === "paper") {
        
                console.log (`${humanChoice} win against ${compChoice} !`);
                return humanScore+=1;
        
            } else {
                console.log (`${humanChoice} loses against ${compChoice} !`);
               return computerScore+=1;;
            }
        }
        playRound(pepa, pepe);

            if (i==5 && humanScore>computerScore) {

                alert(`Congratulations! PLayer wins with a score of ${humanScore}`);

            } else if (i==5 && humanScore<computerScore){
                alert(`Sorry! the machine wins with a score of ${computerScore}`);
            }
            

    }
}



const game=playgame(); // needed so the function is created. remember that if nothing call the function it will be like it does not exist




