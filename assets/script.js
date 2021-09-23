var timerEl = document.querySelector(".time");
var mainElem = document.querySelector("#main");
var title = document.getElementById("title-page")
var question1 = document.querySelector("#hide1")
var question2 = document.querySelector("#hide2")
var question3 = document.querySelector("#hide3")
var finalpage = document.querySelector("#high-score-page")
var rulesEl = document.querySelector("#rules")
var playerchoice = document.querySelector("#player-choice")

var startbutton = document.getElementById("start-button")
var playagainbutton = document.getElementById("play-again")

var buttonA = document.getElementById("btn-a")
var buttonB = document.getElementById("btn-b")
var buttonC = document.getElementById("btn-c")
var buttonD = document.getElementById("btn-d")

var buttonA2 = document.getElementById("btn-a1")
var buttonB2 = document.getElementById("btn-b2")
var buttonA2 = document.getElementById("btn-c2")
var buttonD2 = document.getElementById("btn-d2")

var buttonA3 = document.getElementById("btn-a3")
var buttonB3 = document.getElementById("btn-b3")
var buttonC3 = document.getElementById("btn-c3")
var buttonD3 = document.getElementById("btn-d3")

var secondsleft = 30

question1.setAttribute("style", "display: none;")
question2.setAttribute("style", "display: none;")
question3.setAttribute("style", "display: none;")
finalpage.setAttribute("style", "display: none;")

// setting a timer countdown from 30
var setTime = function () {
    var timeInterval = setInterval(function () {
        secondsleft = secondsleft - 1;

        timerEl.textContent = (secondsleft + " seconds left until GAME OVER.")


        if (secondsleft === 0) {
            clearInterval(timeInterval);
            gameover();
        }
    }, 1000)
}


var gameover = function () {
    timerEl.textContent = "";
}

setTime();
//when countdown to 0 show "game over"

function wrongAnswer() {
    secondsleft = secondsleft - 5;
}

startbutton.addEventListener("click", startQuiz)

function startQuiz() {
    timerEl.classList.remove("time");
    question1.setAttribute("style", "visibility: visible;")
    title.setAttribute("style", "display: none;")
    rulesEl.setAttribute("style", "display:none;")
    startbutton.setAttribute("style", "display:none;")

    var correctanswer1 = function () {
        if (buttonA.dataset === "true") {
            console.log("correct");
            playerchoice.innerText = "Hell Yea!";
            question2.setAttribute("style", "visibility:visible;");
            question1.setAttribute("style", "display: none;");
        } else {
            console.log("Bummer")
            playerchoice.innerText = "Bummer!";
            question2.setAttribute("style", "visibility:visible;");
            question1.setAttribute("style", "display: none;");
        }
    };
    var correctanswer2 = function () {
        if (buttonA.dataset === "true") {
            console.log("correct");
            playerchoice.innerText = "Hell Yea!";
            question2.setAttribute("style", "visibility:visible;");
            question1.setAttribute("style", "display: none;");
        } else {
            console.log("Bummer")
            playerchoice.innerText = "Bummer!";
            question2.setAttribute("style", "visibility:visible;");
            question1.setAttribute("style", "display: none;");
        }

    };
    var correctanswer3 = function () {
        if (buttonA.dataset === "true") {
            console.log("correct");
            playerchoice.innerText = "Hell Yea!";
            question2.setAttribute("style", "visibility:visible;");
            question1.setAttribute("style", "display: none;");
        } else {
            console.log("Bummer")
            playerchoice.innerText = "Bummer!";
            question2.setAttribute("style", "visibility:visible;");
            question1.setAttribute("style", "display: none;");
        }
    };
    var correctanswer4 = function () {
        if (buttonA.dataset === "true") {
            console.log("correct");
            playerchoice.innerText = "Hell Yea!";
            question2.setAttribute("style", "visibility:visible;");
            question1.setAttribute("style", "display: none;");
        } else {
            console.log("Bummer")
            playerchoice.innerText = "Bummer!";
            question2.setAttribute("style", "visibility:visible;");
            question1.setAttribute("style", "display: none;");
        }
    };

}

buttonA.addEventListener("click", correctanswer1);
buttonB.addEventListener("click", correctanswer2);
buttonC.addEventListener("click", correctanswer3);
buttonD.addEventListener("click", correctanswer4);