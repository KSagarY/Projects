// targetting the element in JS and making variables of it   
// when class is targetted then . is used
//when id is targetted then # is used
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");  
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-contianer");
let msg = document.querySelector("#msg");

let turn0 = true;                                     //setting the intial counter to true
const winPattern = [                                  // winning pattern as per the number of the boxes displayed in the UI
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {                                 //accessing each of the box to check the input
  box.addEventListener("click", () => {                  // event listener where a callback function is created
    if (turn0) {                                         // inital player will be O as turn0 is set true on line 10
      box.innerText = "O";
      turn0 = false;                                     //reverting the inital counter 
      box.style.color = "green";                        //setting up the color for O
    } else {
      box.innerText = "X";                             // if turn0 is false then X will be print on the box
      turn0 = true;                                    // resetting the intial counter
      box.style.color = "red";                          //setting up the color for X
    }
    box.disabled = true;                             // disabling the entry once it is captured
    checkWin();                                       // checking the winning pattern from this function
  });
});

const checkWin = () => {                            // Check win function used in line 34
  for (let patterns of winPattern) {                  // looping through all the patterns which are used in win patterns 
      let pos1Val =boxes[patterns[0]].innerText   // set in 0th element in the win pattern array
      let pos2Val =boxes[patterns[1]].innerText   // set in 1st element in the win pattern array
      let pos3Val =boxes[patterns[2]].innerText               // set in 2nd element in the win pattern array
      if (pos1Val != "" && pos2Val != "" && pos3Val != ""){    // checking if the values are equal to the array of win patterns
        if(pos1Val == pos2Val && pos2Val == pos3Val){
          showWinner(pos1Val);   // values are same and hence the winner is confirmed
        }
      }
  }
};

const showWinner = (winner) =>{     // function if the values are same as win pattern
  msg.innerText = 'Congratulation, Winner is ' +winner; // showing the name of the player who won
  msgContainer.classList.remove("hide"); // displaying the message which was previously hidden
  disableBoxes();   //calling function of frezzing further selecting boxes
} 

const disableBoxes = () =>{  //funtion for frezzing further selecting boxes
  for(let box in boxes){
    boxes[box].disabled = true ;
  }
}

const enableBoxes = () =>{    // Enabling the selection on boxes
  for(let box in boxes){
    boxes[box].disabled = false ;
    boxes[box].innerText= "" ;   // clearing all the entries on the boxes
  }
}

const resetGame = () =>{  // function to activate the reset button
  turn0 =true;
  enableBoxes();   //calling the function  to enable the selections again
  msgContainer.classList.add ('hide');  // hiding the message as the game has restarted
}

newGameBtn.addEventListener("click", resetGame);   // event listentor for reset button using the exisitng reset function
resetBtn.addEventListener("click", resetGame); // event listentor for reset button using the exisitng reset function
