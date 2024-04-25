function getComputerChoice(){
    
     let ramdom= Math.floor(Math.random()*3)+1; // mat floor round the number down, math random generates a number between 0 and 1, multiply by 3, max value now is 2, add one to bring up to 3.
     if (ramdom == 1){
        console.log("rock");
     }else if (ramdom == 2) {
        console.log("paper");
     } else {
        console.log ("scissors");
     }
     
}
console.log(getComputerChoice());