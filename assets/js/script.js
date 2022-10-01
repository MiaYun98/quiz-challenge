// variables for the questions and answer generater
// var boxEl = document.querySelectorAll(".box");
var selectEl = document.querySelector(".selection");
var questionEl = document.querySelector("#question");
var timerEl = document.querySelector(".timer");
var startEl = document.querySelector("#start");
var boxEl = document.querySelectorAll("li")
var resultEl = document.querySelector(".result")
var recordEl = document.querySelector(".record")
var saveEl = document.querySelector(".save")
var timer = 50;
var answer = "";
var questionList = [];
var questionCount = 0;
var timeInterval;

//function for the timer
function countdown() {
  timeInterval= setInterval(function () {
    timer--;
    timerEl.textContent = timer + " seconds remaining";
    // if the time left 0 stop the counter and display the message
    if (timer <= 0) {
      clearInterval(timeInterval);
      questionEl.textContent = "Over time.... Try Again";
      timer = 50;
      timerEl.setAttribute = timer + " seconds remaining";
      document.body.children[2].setAttribute("style", "display: none")
      startEl.setAttribute("style", "display: unset")
    }
    //setting the speed of counter
  }, 1000);
}

//result function
function result() {
  clearInterval(timeInterval);
  questionEl.textContent = "Your Score is " + timer;
  selectEl.className = "hidden";
  resultEl.classList.remove("hidden");
  document.querySelector(".toprecord").className = "hidden";
}

//fucntion for submitting the data when it click
// function 


//function for recalling data when it clicks the result button apply to the top and bottom both 


//click for the solving the quiz
selectEl.addEventListener("click", function (event) {
  var element = event.target;
  var state = element.getAttribute("data-state");
  
  if (state !== answer) {
    timer = timer - 15;
    document.querySelector(".answer").textContent = "Wrong!";
    eachQuestion(questionList[questionCount]);
  } else {
    document.querySelector(".answer").textContent = "Right!";
    eachQuestion(questionList[questionCount]);
  }
});

// Questions go up and up and setting the answer if questioncount excceed the number of questions it goes to the result function
function eachQuestion(input) {
  if (questionCount < 5) {
    questionCount = questionCount + 1;
    questionEl.textContent = input[0];
    for (var i = 1; i < input.length - 1; i++) {
      selectEl.children[i - 1].textContent = input[i];
    }
    answer = input[5];
  } else {
  result();
  }
}

// starting function which start the quiz when it clicks the start button
function quizStart () {
  document.querySelector(".discription").className = "hidden"
  selectEl.classList.remove("hidden");
  countdown();
  // and button disappear
  startEl.setAttribute("style", "display: none");
  // selectEl.setAttribute("style", "text-align: left; margin-left: 30%");
  
  //question
  questionList[0] = ['What are two things you can never eat for breakfast?', 'Cats and dogs', 'Afternoon tea and Snack', 'Lunch and Dinner', 'Frankenstein and Harry Potter', '3'] 
  questionList[1] = ['What is always coming but never arrives? ', 'Break', 'Rest', 'Holiday', 'Tomorrow', '4'];
  questionList[2] = ['What word is spelled incorrectly in every single dictionary?', 'Cat', 'Incorrectly', 'lizard', 'love', '2'];
  questionList[3] = ['What is it that lives if it is fed, and dies if you give it a drink?', 'Fire', 'Human', 'Life', 'love', '1'];
  questionList[4] = ['What never asks a question but gets answered all the time?', 'Service Center', 'Government', 'University Office', 'Your cellphone', '4'];
  eachQuestion(questionList[questionCount]);
}

// if press the start button it starts the game go to funtion game
startEl.addEventListener("click", quizStart);
resultEl.className = "hidden";
selectEl.className = "hidden";
// saveEl.addEventListener("click",)