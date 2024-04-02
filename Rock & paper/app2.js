let userScore = 0;                                                  // initalling the variable as 0
let compScore = 0;                                                  // initalling the variable as 0

const choices = document.querySelectorAll(".choice");              // query selectors for the elements to bring in javascript
const msg =document.querySelector("#msg");
const userScorePara =document.querySelector("#user-score");
const  compScorePara=document.querySelector("#comp-score");

const genCompChoice = () => {                                     //function to generate the random output from computer
  let options = ["rock", "paper", "scissors"];                    // putting the options in an array
  let randIdx = Math.floor(Math.random() * 3);                    // using math function to give a random index between 0 and 2
  return options[randIdx];                                        //storing and returning random selected position in the array
};

const drawGame = () =>{                                           //function when both the choices are same
  console.log("The game was draw");  
  msg.innerText = "The game was draw"
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice ,compChoice) => {
  if(userWin){     
    userScore ++;                                                 //if user wins then updating the user score by 1
    userScorePara.innerText = userScore;
    console.log("Congratulation, user won.!!");
    msg.innerText = "Congratulations! "+ userChoice +" beats " + compChoice ;
    msg.style.backgroundColor ="green"
  }
  else{
    compScore++;                                                  //if user wins then updating the computer score by 1
    compScorePara.innerText =compScore;
    console.log("Hard luck next time");
    msg.innerText= "Hard luck next time! "+ compChoice +" beats " + userChoice ;
    msg.style.backgroundColor ="red"
  }
};


const playGame = (userChoice) => {                                 //main logic - function to play the game
  console.log("User choice =", userChoice);                        //getting the user choice from below for each
  const compChoice = genCompChoice();                              //calling the function which generates the random number
  console.log("Comp choice =", compChoice);
  if (userChoice === compChoice){                                  // if user choice  is equal to computer's choice then call the draw function from above
    drawGame();
  }
  else {
    let userWin =true;                                             // initalise the variable as true 
    if (userChoice === "rock"){                                    // if user choice is rock
      // now comp has only 2 choices i.e. sciccor and paper
      userWin = compChoice ===  "paper" ? false:true;              //used tenary operator to make it simple>> if comp choice is paper then store user win as false or else store it as true
    }
    else if (userChoice === "paper"){                              // if user choice is paper
      // now comp has 2 choices scissors and rock      
      userWin = compChoice === "scissors" ? false:true;            // if compl choice is scissors then store user win as false or else store true
    }
    else {                                                        // by default the userChoice will be scissors here
      // now comp has 2 options i.e. paper and rock
      userWin = compChoice === "rock" ? false:true;               // if  comp choice is rock then store win user with false or else store with true
    }
    showWinner(userWin ,userChoice, compChoice);                 // call function show winner with parameters defined above as variables
  }
};

choices.forEach((choice) => {                                  // iterating the choices class element which has multiple choice class element in it
  choice.addEventListener("click", () => {                     // adding an event lisetiner for click and a callback function
    const userChoice = choice.getAttribute("id");              // storing the user choice when a user clicks on the img with id tag
    playGame(userChoice)                                       // calling function playback and passing the paramter of user choice vaiable
  }); 
});
