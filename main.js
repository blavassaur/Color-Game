var numSquares = 6;
var colors;
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var title = document.querySelector(".header");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

resetButton.addEventListener("click", function () {
    reset();
});

function init() {
    //mode button event listeners
    setUpModeButtons();
    //set up squares
    setUpSquares();
    reset();
}

function setUpModeButtons() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("active");
            modeButtons[1].classList.remove("active");
            this.classList.add("active");
            this.textContent === "EASY" ? numSquares = 3 : numSquares = 6;

            reset();
        })
    }
}

function setUpSquares() {

    for (var i = 0; i < squares.length; i++) {
        //add click listeners to squres
        squares[i].addEventListener("click", function () {
            //grab color of clicked square
            var clickedColor = this.style.backgroundColor
            //compare color to pickedColor
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "MY MAN!";
                resetButton.textContent = "Play Again"
                winColors(clickedColor);
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "lol nope";

            }
        })
    }
}

function reset() {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor(0);
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    resetButton.textContent = "NEW COLORS";
    title.style.backgroundColor = "#232323";
    for (var i = 0; i < squares.length; i++) {
        //add colors to squares
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
}


//change color of squares when correct
function winColors(color) {
    //change h1 color
    title.style.backgroundColor = color;
    //change square color
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function generateRandomColors(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }

    return arr;
}

function randomColor() {
    //red
    var red = Math.floor(Math.random() * 256);
    //green
    var green = Math.floor(Math.random() * 256);
    //blue
    var blue = Math.floor(Math.random() * 256);

    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}