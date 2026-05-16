// let rock = document.getElementById("rock");

// rock.addEventListener("click",() => {
//     console.log(Math.floor(Math.random()*3));
// })
let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScore = document.querySelector("#user-score");
const compScore = document.querySelector("#comp-score");



let compChoice = () => {

    let arr = ["rock","paper","srissor"];
    let index = Math.floor(Math.random()*3);
    return arr[index];
}

const showWin = (userWin,compchoice,userChoice) => {
  if(userWin) {
    console.log("user is win");
    msg.innerTaxt = `You Win ! ${userChoice} beats ${compchoice}` ;
    msg.style.backgroundColor = "green";
    userScore.innerTaxt++;
  }
  else{
    console.log("user lose !");
    msg.innerTaxt = `You Lose ! ${compchoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
    compScore.innerTaxt++;
  }
      
}

function playGame(userChoice) {
  console.log("user choice = ",userChoice);
    let compchoice = compChoice();
    console.log("comp choice = ",compchoice);
    
    if(userChoice===compchoice){
        console.log("match was drowed");
        msg.innerTaxt = "match was drowed !";
        msg.style.backgroundColor =  "black";
    }

    else {
    let userWin = true;

    if(userChoice === "rock"){
      //paper,scrissor
        userWin = compchoice == "paper" ? false : true;
    } 
    else if(userChoice === "paper"){
      //rock,srissor
      userWin = compchoice == "srissor"? false : true;
    }
    else {
      userWin = compchoice == "rock"? false : true;
    }
    showWin(userWin);
}

}

choices.forEach( (choice)=> {

 choice.addEventListener("click",() => {
    let userChoice = choice.getAttribute("id");
    playGame(userChoice);
 }) ;  
})