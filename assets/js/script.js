// variables for the questions and answer generater
var selectEl = document.querySelector(".selection");
var questionEl = document.querySelector("#question");
var timerEl = document.querySelector(".timer");
var startEl = document.querySelector(".start");
var boxEl = document.querySelectorAll("li");
var resultEl = document.querySelector(".result");
var recordPageEl = document.querySelector("#recordPage");
var saveEl = document.querySelector("#save");
var nameEl = document.querySelector("#name-input");
var scorelistEl = document.querySelector("#scorelist");
var historyName = [];
var historyScore = [];
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
    if (timer === 0) {
      clearInterval(timeInterval);
      questionEl.textContent = "Over time.... Try Again";
      selectEl.classList.add("hidden");
      timer = 50;
      questionCount = 0;
      startEl.setAttribute("style", "display: unset");
    }
    //setting the speed of counter
  }, 1000);
}

//result function
function result() {
  clearInterval(timeInterval);
  document.querySelector(".record").classList.add("hidden");
  if (timer < 0) {
    questionEl.textContent = "You missed a lot!" + timer;
    selectEl.classList.add("hidden");
    resultEl.classList.remove("hidden");
    timerEl.textContent = "Game Finished"
  } else {
    questionEl.textContent = "Your Score is " + timer;
    selectEl.classList.add("hidden");
    resultEl.classList.remove("hidden");
    timerEl.textContent = "Game Finished"
  } 
}

//fucntion for submitting the data when it click and JSON stringfy the score
function submit() {
  var score = timer;
  var name = nameEl.value.trim();
  if (name === "") {
    return;
  }
  if (JSON.parse(localStorage.getItem("historyName")) !== null && JSON.parse(localStorage.getItem("historyScore")) !== null) {
    historyName = JSON.parse(localStorage.getItem("historyName"));
    historyScore = JSON.parse(localStorage.getItem("historyScore"));
  }
  historyName.push(name);
  historyScore.push(score);

  storeScore();
  recordlist();
}

// store data in local storage
function storeScore() {
  localStorage.setItem("historyName", JSON.stringify(historyName));
  localStorage.setItem("historyScore", JSON.stringify(historyScore));
}

//record page
function recordlist() {
  recordPageEl.classList.remove("hidden");
  resultEl.classList.add("hidden");
  scorelistEl.textContent = "";
  for (var i = 0; i < historyName.length; i++) {
    var initial = historyName[i];
    var numberScore = historyScore[i];

    var li = document.createElement("li");
    li.textContent = "Initial: " + initial + " Score: " + numberScore;
    li.setAttribute("data-index", i);

    scorelistEl.appendChild(li);
  }
}

//button for the top record button
function topRecord() {
  document.querySelector(".front").classList.add("hidden");
  historyName = JSON.parse(localStorage.getItem("historyName"));
  historyScore = JSON.parse(localStorage.getItem("historyScore"));
  document.querySelector(".record").classList.add("hidden");
  recordlist();
}

// reset the variables in the local storage and regen the list
function reset() {
  historyName = [];
  historyScore = [];
  localStorage.clear();
  recordlist();
}

// reloading the page
function reload() {
  document.location.reload();
}

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
  if (timer <= 0) {
    result();
  } else {
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
}

// starting function which start the quiz when it clicks the start button
function quizStart () {
  document.querySelector(".discription").classList.add("hidden");
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
resultEl.classList.add("hidden");
selectEl.classList.add("hidden");
recordPageEl.classList.add("hidden");
saveEl.addEventListener("click", submit);
document.querySelector(".record").addEventListener("click", topRecord);
document.querySelector("#reset").addEventListener("click", reset);
document.querySelector("#restart").addEventListener("click", reload);

