const pause = document.getElementById("pauseIcon");
const play = document.getElementById("playIcon");

pause.onclick = function () {
    pause.style.display = "none";
    play.style.display = "block"
}

play.onclick = function () {
    pause.style.display = "block";
    play.style.display = "none"
}

