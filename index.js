const timer = document.getElementById("timer");
timer.addEventListener("submit", function(e) {
    e.preventDefault();
    const startingMinutes = timer.timerMinutes.value;
    let time = startingMinutes * 60;
    const countDown = document.getElementById("countdown");


    setInterval(updateCountDown, 1000);

    function updateCountDown() {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;


        seconds = seconds < 10 ? "0" + seconds : seconds;

        countDown.innerHTML = `${minutes}:${seconds}`
        time--
    }

    timer.reset()
})