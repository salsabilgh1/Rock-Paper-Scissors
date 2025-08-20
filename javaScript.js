
function getComputerChoice(){
    let choice=Math.floor(Math.random()*3+1);
    if(choice===1){
        return "Rock";
        
    }else if(choice===2){
        return "Paper"
    }else{
        return "Scissors"
    }
}


let humanScore=0;
let computerScore=0;

//function playRound(){
    let humanChoice ;
    let computerChoice;
    const body = document.querySelector("body");
    const rock = document.querySelector(".rock");
    const paper = document.querySelector(".paper");
    const scissors = document.querySelector(".scissors");
    rock.addEventListener("click" , () => {
        humanChoice = "rock";
        computerChoice=getComputerChoice().toLowerCase();
            if(humanChoice===computerChoice){
        console.log("it's a draw!")
    }
    else{
        if(computerChoice==="scissors"){
            console.log("you win! "+ humanChoice+" beats "+computerChoice)
            humanScore++;
        }else{
            console.log("you lose! "+ computerChoice+" beats "+humanChoice)
            computerScore++;
        }
    }
    })
    paper.addEventListener("click" , () => {
        humanChoice = "paper";
        computerChoice=getComputerChoice().toLowerCase();
            if(humanChoice===computerChoice){
        console.log("it's a draw!")
    }
    else{
        if(computerChoice==="rock"){
            console.log("you win! "+ humanChoice+" beats "+computerChoice)
            humanScore++;
        }else{
            console.log("you lose! "+ computerChoice+" beats "+humanChoice)
            computerScore++;
        }
    }
    })
    scissors.addEventListener("click" , () => {
        humanChoice = "scissors";
        computerChoice=getComputerChoice().toLowerCase();
            if(humanChoice===computerChoice){
        console.log("it's a draw!")
    }
    else{
        if(computerChoice==="paper"){
            console.log("you win! "+ humanChoice+" beats "+computerChoice)
            humanScore++;
        }else{
            console.log("you lose! "+ computerChoice+" beats "+humanChoice)
            computerScore++;
        }
    }
    })

    

