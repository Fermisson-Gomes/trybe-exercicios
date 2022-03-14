document.getElementById("header-container").style.backgroundColor = "green";

document.querySelector(".emergency-tasks").style.backgroundColor = "pink";

document.querySelector(".no-emergency-tasks").style.backgroundColor = "yellow";

let div1 = document.querySelectorAll(".emergency-tasks h3");

let div2 = document.querySelectorAll(".no-emergency-tasks h3");

for (let i = 0; i < div1.length; i += 1){
  div1[i].style.backgroundColor = "purple";
}

for (let i = 0; i < div2.length; i += 1){
  div2[i].style.backgroundColor = "gray";
}

document.getElementById("footer-container").style.backgroundColor = "seagreen";