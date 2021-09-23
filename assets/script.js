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

var buttonA = document.querySelector("#btn-a")
var buttonB = document.querySelector("#btn-b")
var buttonC = document.querySelector("#btn-c")
var buttonD = document.querySelector("#btn-d")

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

    buttonA.addEventListener("click", correctanswer1);
    function correctanswer1() {
        if (buttonA.dataset.answer === "true") {
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
    buttonB.addEventListener("click", correctanswer2);
    function correctanswer2() {
        if (buttonB.dataset.answer === "true") {
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
    buttonC.addEventListener("click", correctanswer3);
    function correctanswer3() {
        if (buttonC.dataset.answer === "true") {
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
    buttonD.addEventListener("click", correctanswer4);
    function correctanswer4() {
        if (buttonD.dataset.answer === "true") {
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

    buttonA2.addEventListener("click", correctanswer5);
    function correctanswer5() {
        if (buttonA2.dataset.answer === "true") {
            console.log("correct");
            playerchoice.innerText = "Hell Yea!";
            question3.setAttribute("style", "visibility:visible;");
            question2.setAttribute("style", "display: none;");
        } else {
            console.log("Bummer")
            playerchoice.innerText = "Bummer!";
            question3.setAttribute("style", "visibility:visible;");
            question2.setAttribute("style", "display: none;");
        }
    };
    buttonB2.addEventListener("click", correctanswer6);
    function correctanswer6() {
        if (buttonB2.dataset.answer === "true") {
            console.log("correct");
            playerchoice.innerText = "Hell Yea!";
            question3.setAttribute("style", "visibility:visible;");
            question2.setAttribute("style", "display: none;");
        } else {
            console.log("Bummer")
            playerchoice.innerText = "Bummer!";
            question3.setAttribute("style", "visibility:visible;");
            question2.setAttribute("style", "display: none;");
        }

    };
    buttonC2.addEventListener("click", correctanswer7);
    function correctanswer7() {
        if (buttonC2.dataset.answer === "true") {
            console.log("correct");
            playerchoice.innerText = "Hell Yea!";
            question3.setAttribute("style", "visibility:visible;");
            question2.setAttribute("style", "display: none;");
        } else {
            console.log("Bummer")
            playerchoice.innerText = "Bummer!";
            question3.setAttribute("style", "visibility:visible;");
            question2.setAttribute("style", "display: none;");
        }
    };
    buttonD2.addEventListener("click", correctanswer8);
    function correctanswer8() {
        if (buttonD2.dataset.answer === "true") {
            console.log("correct");
            playerchoice.innerText = "Hell Yea!";
            question3.setAttribute("style", "visibility:visible;");
            question2.setAttribute("style", "display: none;");
        } else {
            console.log("Bummer")
            playerchoice.innerText = "Bummer!";
            question3.setAttribute("style", "visibility:visible;");
            question2.setAttribute("style", "display: none;");
        }
    };

}

// buttonA.addEventListener("click", correctanswer1);
// buttonB.addEventListener("click", correctanswer2);
// buttonC.addEventListener("click", correctanswer3);
// buttonC.addEventListener("click", correctanswer4);