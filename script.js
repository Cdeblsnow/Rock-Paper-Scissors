



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
       
       function getHumanChoice(){
       
        const btnPlayerChoice = document.querySelectorAll("button");
        btnPlayerChoice.forEach((button) => {
        button.addEventListener("click", playRound => {

            console.log(button.id)

            return button.id;
            
            
    
        }) ;
    });
       }

            
            const compSelection = getComputerChoice();
            const humanSelection=getHumanChoice();
            let compChoice = compSelection;
            let humanChoice = humanSelection;
            

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
        playRound(humanSelection, compSelection);

            if ( humanScore>computerScore) {

                alert(`Congratulations! PLayer wins with a score of ${humanScore}`);

            } else if ( humanScore<computerScore){
                alert(`Sorry! the machine wins with a score of ${computerScore}`);
            }
            












