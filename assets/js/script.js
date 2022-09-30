// variables for the questions and answer generater
// var boxEl = document.querySelectorAll(".box");
var selectEl = document.querySelector(".selection");
var questionEl = document.querySelector("#question");
var timerEl = document.querySelector(".timer");
var startEl = document.querySelector("#start");
var boxEl = document.querySelector(".box")
var timer = 5;

//function for the timer 
function countdown() {
  var timeInterval = setInterval(function () {
    timer--;
    timerEl.textContent = timer + " seconds remaining";
    // if the time left 0 stop the counter and display the message
    if (timer === 0) {
      clearInterval(timeInterval);
      questionEl.textContent = "Over time.... Try Again";
      timerEl.setAttribute = timer + " seconds remaining";
      document.body.children[2].setAttribute("style", "display: none")
      startEl.setAttribute("style", "display: unset")
    }
    //setting the speed of counter
  }, 1000);
}

// Question Setting 

// question text with the array & answer for the 1-4 select Math.ran array[i]   
var question1 = ['0', '1', '2', '3', '4', '3'] //right answer = 3  

function eachQuestion(input) {
  questionEl.textContent = input[0];
  for (i = 1; i < input.length - 1; i++) {
    // boxEl[i].textContent = question1[i];
    document.body.children[2].children[i - 1].textContent = input[i];
  }
  // answer variable 
  var answer = input[5];
  return answer;
}

  // store the value that ppl click
  // if it click the answer it goes to the next step right answer = go to next 
function choosingAnswer (input) {
  eachQuestion(input);
  selectEl.addEventListener("click", function (event) {
    var state = element.getAttribute("data-state");

    if (state == answer) {

    } else {
      // wrong answer = -15 sec and not go to next
      timer = timer - 15;
    }
  }
}      
// function randomNum () {
//     Math.floor(Math.)
// }

// if press the start button it starts the game go to funtion game 
startEl.addEventListener("click", function () {
  countdown();
  // and button disappear
  startEl.setAttribute("style", "display: none")
  //question
  eachQuestion(question1);
})
// 20

// question text change when ppl click the thing 
