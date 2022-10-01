
// timer 
var timer = 10;
function countdown() {
    var timeInterval = setInterval(function () {
      timer--;
      timerEl.textContent = timer + " seconds remaining";
      // if the time left 0 stop the counter and display the message
      if (timer <= 0) {
        clearInterval(timeInterval);
        questionEl.textContent = "Over time.... Try Again";
        timerEl.setAttribute = timer + " seconds remaining";
        document.body.children[2].setAttribute("style", "display: none")
        startEl.setAttribute("style", "display: unset")
        lose ++; 
      }
      //setting the speed of counter
    }, 1000);
}

const questions = [{
    num: 0,
    q: "What is capital of India?",
    a: [{ text: "gandhinagar", isCorrect: false },
        { text: "Surat", isCorrect: false },
        { text: "Delhi", isCorrect: true },
        { text: "mumbai", isCorrect: false }
    ]

},
{
    num: 1,
    q: "What is the capital of Thailand?",
    a: [{ text: "Lampang", isCorrect: false, isSelected: false },
        { text: "phuket", isCorrect: false },
        { text: "Ayutthaya", isCorrect: false },
        { text: "Bangkok", isCorrect: true }
    ]

},
{
    num: 2,
    q: "What is the capital of Gujarat",
    a: [{ text: "surat", isCorrect: false },
        { text: "vadodara", isCorrect: false },
        { text: "gandhinagar", isCorrect: true },
        { text: "rajkot", isCorrect: false }
    ]

}];

function quiz (num) {
    var question = document.
}
