console.log("Hello World!")
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

function getHumenChoice(){
    let choice=prompt("enter your choice : Rock , Paper , or Scissors");
    
        return choice;
    
}
let humanScor=0;
let computerScore=0;

function playRound(){
    let humanChoice=getHumenChoice().toLowerCase();
    let computerChoice=getComputerChoice().toLowerCase();
    if(humanChoice===computerChoice){
        console.log("it's a draw!")
    }
    else{
        if(humanChoice==="rock"&&computerChoice==="scissors"||humanChoice==="paper"&&computerChoice==="rock"||humanChoice==="scissors"&&computerChoice==="paper"){
            console.log("you win! "+ humanChoice+" beats "+computerChoice)
            humanScor++;
        }else{
            console.log("you lose! "+ computerChoice+" beats "+humanChoice)
            computerScore++;
        }
    }
}
function palyGame(){
    for(i=0; i<5 ;i++){
        console.log("round "+ i +" start")
        playRound();
    }
    console.log("scors:\n")
    console.log("You: "+ humanScor)
    console.log("computer: "+computerScore)
    if(humanScor>computerScore){
        console.log("you won the game!")
    }else{
        console.log("you lose")
    }
}
palyGame()