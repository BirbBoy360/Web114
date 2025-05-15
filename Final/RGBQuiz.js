"use strict";
const TITLE_TEXT = document.getElementById("titleText");
const COLOR_NAME = document.getElementById("colorName");
const COL_BTN = document.getElementById("colorButton");
const RAND_BTN = document.getElementById("randButton");
const GUESS_BTN = document.getElementById("guessBtn");
const GUESS_Input = document.getElementById("guessIn");
const POINTS_ID = document.getElementById("points");
const REVEALER = document.getElementById("revealer");
const FRAME = document.getElementById("mask");
let ul = document.getElementById("upgrades");

let newColor = "#000";
let nameVar, nameVarAlt = "";
let points = 0;
let itemCounter = 0;

let randomColor, randoR, randoG, randoB;
const SHOW_R = document.createTextNode("rVal");
const SHOW_G = document.createTextNode("gVal");
const SHOW_B = document.createTextNode("bVal");

let isRandom = false;
let hasClass = false;

//Displays max points and creates the buttons for the shop 
console.log("Named Points: 400 \nMax Random Points: 765");
CreatePurchase("Reveal R Value", "Spend 1000 Points", 1);
CreatePurchase("Reveal G Value", "Spend 1000 Points", 2);
CreatePurchase("Reveal B Value", "Spend 1000 Points", 3);
CreatePurchase("Add Style and Class", "Spend 3000 Points", 4);

/* Assigns the buttons with the functions that change the color accordingly.
 Since the functions are used elsewhere they are declared separately. */
COL_BTN.addEventListener("click", Cycle);
RAND_BTN.addEventListener("click", Randomize)

//Check named guesses and call function to check random guesses. 
guessBtn.addEventListener("click", function CheckGuess() {
    let guess = GUESS_Input.value;
    //check answer for random colors and display awarded points
    if (isRandom) {
        let pointsAwarded = CheckRandom(guess);
        alert(`${pointsAwarded} points were awarded!`);
        Randomize();
    }
    //Check answer for named colors and display message
    else {
        if (guess == "") {
            alert("Please input your guess first!");
        }
        else if (guess.toLowerCase() == nameVar.toLowerCase() ||
            guess.toLowerCase() == nameVarAlt.toLowerCase()) {
            AddPoints(400);
            alert("Great Guess!");
            Cycle();
        }
        else {
            if (nameVarAlt != "") {
                alert("Close! The color was " + nameVar + " or " + nameVarAlt)
            }
            else {
                alert("Close! The color was " + nameVar);
            }
            Cycle();
        }
    }
    GUESS_Input.value = "";
})

function Cycle() {
    COLOR_NAME.textContent = "This color is ";
    let guessNum = Math.floor(Math.random() * 15) + 1;
    switch (guessNum) {
        case 1:
            newColor = "#F00";
            nameVar = "red";
            nameVarAlt = "";
            break;
        case 2:
            newColor = "#FFA500";
            nameVar = "orange";
            nameVarAlt = "";
            break;
        case 3:
            newColor = "#FF0";
            nameVar = "yellow";
            nameVarAlt = "";
            break;
        case 4:
            newColor = "#0F0";
            nameVar = "lime";
            nameVarAlt = "light green";
            break;
        case 5:
            newColor = "#0FF";
            nameVar = "cyan";
            nameVarAlt = "aqua";
            break;
        case 6:
            newColor = "#00F";
            nameVar = "blue";
            nameVarAlt = "";
            break;
        case 7:
            newColor = "#F0F";
            nameVar = "magenta";
            nameVarAlt = "pink";
            break;
        case 8:
            newColor = "#008000";
            nameVar = "green";
            nameVarAlt = "";
            break;
        case 9:
            newColor = "#8B4513";
            nameVar = "brown";
            nameVarAlt = "";
            break;
        case 10:
            newColor = "#000080";
            nameVar = "navy";
            nameVarAlt = "dark blue";
            break;
        case 11:
            newColor = "#808080";
            nameVar = "grey";
            nameVarAlt = "gray";
            break;
        case 12:
            newColor = "#800000";
            nameVar = "maroon";
            nameVarAlt = "burgundy";
            break;
        case 13:
            newColor = "#D2B48C";
            nameVar = "Tan";
            nameVarAlt = "Beige";
            break;
        case 14:
            newColor = "#FFC0CB";
            nameVar = "pink";
            nameVarAlt = "salmon";
            break;
        case 15:
            newColor = "#FFF";
            nameVar = "white";
            nameVarAlt = "";
            break;
        default:
            alert("ERROR " + counterVar);
            break;
    }// end switch
    TITLE_TEXT.style.color = newColor;
    isRandom = false;
    console.log("If empty, only one name is accepted.\nAnswer: " + nameVar + " or " + nameVarAlt);
    if (hasClass) {FRAME.style.backgroundColor = newColor}
}// end Cycle function

/* ----- Code Regarding Random ---------------------------------- */

//Generates and displays a random color for text and background using RGB values
function Randomize() {
    //Version given in class that converts to hex
    //let rando = "#" + Math.floor(Math.random() * 16777215).toString(16);
    randoR = Math.floor(Math.random() * 256);
    randoG = Math.floor(Math.random() * 256);
    randoB = Math.floor(Math.random() * 256);
    let rando = `${randoR},${randoG},${randoB}`;
    console.log("Answer: " + rando)
    TITLE_TEXT.style.color = `rgb(${rando})`;
    if (hasClass) {
        FRAME.style.backgroundColor = `rgb(${rando})`;
    }
    COLOR_NAME.textContent = 'Please Input RGB Values like "255 255 255" with spaces';
    isRandom = true;
    randomColor = rando;
    UpdateValue();
}

//It made more sense to me to separate this 
function UpdateValue() {
    SHOW_R.nodeValue = `R: ${randoR} `;
    SHOW_G.nodeValue = `G: ${randoG} `;
    SHOW_B.nodeValue = `B: ${randoB} `;
}

/* Splits the input field by spaces and checks it with the random RGB values
Its a little longer than the named checker so I separated it.*/
function CheckRandom(guess) {
    let guessArr = guess.split(" ");
    let randomArr = randomColor.split(",");
    let RPoints = 255 - Math.abs(Number(randomArr[0]) - Number(guessArr[0]));
    let GPoints = 255 - Math.abs(Number(randomArr[1]) - Number(guessArr[1]));
    let BPoints = 255 - Math.abs(Number(randomArr[2]) - Number(guessArr[2]));
    console.log("RandomColor Array: " + randomArr)
    console.log("Guess Array: " + guessArr)
    let pointSum = RPoints + GPoints + BPoints;
    console.log("Points: " + RPoints, GPoints, BPoints, pointSum);

    AddPoints(pointSum);
    return pointSum;
}

/* ----- Start Shop Code ---------------------------------------- */

//Calculate points and update point display
function AddPoints(newPoints) {
    POINTS_ID.textContent = "Points: ";
    points += newPoints;
    POINTS_ID.textContent += points;
}

/* This function allows the purchase buttons to be instantiated with less code. 
By passing in the parameter itemNum, they can all be called with the same function 
and don't all need their own event listeners.

I couldn't figure out how to remove child elements easily without creating them in js with what we know. 
*/
function CreatePurchase(liTextIn, btnTextIn, itemNum) {
    let li = document.createElement("li");
    let liText = document.createTextNode(liTextIn);
    li.appendChild(liText);
    let btnText = document.createTextNode(btnTextIn);
    let buyBtn = document.createElement("button");
    buyBtn.appendChild(btnText);
    li.appendChild(buyBtn);
    ul.appendChild(li);

    buyBtn.addEventListener("click", function Purchase() {
        let span = document.createElement("span");
        
        switch (itemNum) {
            case 1:
                if (points >= 1000) {
                    AddPoints(-1000);
                    li.style.textDecoration = "line-through";
                    li.removeChild(buyBtn);
                    ++itemCounter;

                    REVEALER.style.display = "block";
                    span.appendChild(SHOW_R);
                    REVEALER.appendChild(span)

                }
                else { alert("Not enough points!") }
                break;
            case 2:
                if (points >= 1000) {
                    AddPoints(-1000);
                    li.style.textDecoration = "line-through";
                    li.removeChild(buyBtn);
                    ++itemCounter;
                    
                    REVEALER.style.display = "block";
                    span.appendChild(SHOW_G);
                    REVEALER.appendChild(span);
                }
                else { alert("Not enough points!") }
                break;
            case 3:
                if (points >= 1000) {    
                    AddPoints(-1000);
                    li.style.textDecoration = "line-through";
                    li.removeChild(buyBtn);
                    ++itemCounter;

                    REVEALER.style.display = "block";
                    span.appendChild(SHOW_B);
                    REVEALER.appendChild(span);
                }
                else { alert("Not enough points!") }
                break;
            case 4:
                if (points >= 3000) {
                    AddPoints(-3000);
                    li.style.textDecoration = "line-through";
                    li.removeChild(buyBtn);
                    
                    FRAME.style.backgroundColor = `rgb(${randomColor})`;
                    hasClass=true;
                }
                else { alert("Not enough points!") }
                break;
            default:
                break;
        }
        if (itemCounter === 3) {
            alert("You Win!");
        } 
    })
}