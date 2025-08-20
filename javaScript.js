
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
    let result ;
    const body = document.querySelector("body");
    const rock = document.querySelector(".rock");
    const paper = document.querySelector(".paper");
    const scissors = document.querySelector(".scissors");
    rock.addEventListener("click" , () => {
        humanChoice = "rock";
        computerChoice=getComputerChoice().toLowerCase();
            if(humanChoice===computerChoice){
        result="it's a draw!";
    }
    else{
        if(computerChoice==="scissors"){
            result="you win! "+ humanChoice+" beats "+computerChoice;
            humanScore++;
        }else{
            result="you lose! "+ computerChoice+" beats "+humanChoice;
            computerScore++;
        }
    }
    const div = document.createElement("div");
    div.textContent=result;
    body.appendChild(div);
    const score = document.createElement("p");
    score.textContent="You " + humanScore +"\n  computer " + computerScore;
    body.appendChild(score)
    if(computerScore===5 || humanScore === 5){
        let winner = humanScore>computerScore ? "You" : "computer";
        const end = document.createElement("p");
        end.textContent = "End of game the winner is: " +winner ; 
        body.appendChild(end);
    }
})
//paper
    paper.addEventListener("click" , () => {
        humanChoice = "paper";
        computerChoice=getComputerChoice().toLowerCase();
            if(humanChoice===computerChoice){
        result="it's a draw!";
    }
    else{
        if(computerChoice==="rock"){
            result="you win! "+ humanChoice+" beats "+computerChoice;
            humanScore++;
        }else{
            result="you lose! "+ computerChoice+" beats "+humanChoice;
            computerScore++;
        }
    }
    const div = document.createElement("div");
    div.textContent=result;
    body.appendChild(div);
    const score = document.createElement("p");
    score.textContent="You " + humanScore +"\n  computer " + computerScore;
    body.appendChild(score)
    if(computerScore===5 || humanScore === 5){
        let winner = humanScore>computerScore ? "You" : "computer";
        const end = document.createElement("p");
        end.textContent = "End of game the winner is: " +winner ; 
        body.appendChild(end);
    }
    })
    //scissors
    scissors.addEventListener("click" , () => {
        humanChoice = "scissors";
        computerChoice=getComputerChoice().toLowerCase();
            if(humanChoice===computerChoice){
        result="it's a draw!"
    }
    else{
        if(computerChoice==="paper"){
            result="you win! "+ humanChoice+" beats "+computerChoice;
            humanScore++;
        }else{
           result="you lose! "+ computerChoice+" beats "+humanChoice;
            computerScore++;
        }
    }
    const div = document.createElement("div");
    div.textContent=result;
    body.appendChild(div);
    const score = document.createElement("p");
    score.textContent="You " + humanScore +"\n  computer " + computerScore;
    body.appendChild(score)
    if(computerScore===5 || humanScore === 5){
        let winner = humanScore>computerScore ? "You" : "computer";
        const end = document.createElement("p");
        end.textContent = "End of game the winner is: " +winner ; 
        body.appendChild(end);
    }
    })

    

    

