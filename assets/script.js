function timer() {
    var sec = 30;
    var timer = setInterval(function () {
        document.getElementById('timer').innerHTML = '0' + sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
}