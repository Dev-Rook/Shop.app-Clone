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

// /* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
// function openNav() {
//     document.getElementById("mySidebar").style.width = "50%";
//     document.getElementById("main").style.marginright = "250px";
//   }
  
//   /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
//   function closeNav() {
//     document.getElementById("mySidebar").style.width = "0";
//     document.getElementById("main").style.marginright = "0";
//   }


function toggle() {
    const OC = document.getElementById("sideBar");

    if(OC.style.display === "block") {
        OC.style.display = "none";
    }

    else {
        OC.style.display = "block"
    }
}