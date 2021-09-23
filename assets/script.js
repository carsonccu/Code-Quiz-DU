var timerEl = document.querySelector(".time");
var mainElem = document.querySelector("#main");
var title = document.getElementById("title-page")
var question1 = document.getElementById("hide1")
var question2 = document.getElementById("hide2")
var question3 = document.getElementById("hide3")
var finalpage = document.getElementById("high-score-page")

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
