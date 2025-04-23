//Ryan Blackwell 4/23/25
let thisOne = document.getElementById("thisOne");
thisOne.style.color = "#F00";

let olli = document.querySelector('ol > li > ul > li');
olli.style.color="#000"
for (let i = 0; i < olli.length; i++) {
    olli[i].style.color = "#000";
}