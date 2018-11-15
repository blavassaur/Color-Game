var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var title = document.querySelector(".header");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");

colorDisplay.textContent = pickedColor;

resetButton.addEventListener("click", function () {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor(0);
    colorDisplay.textContent = pickedColor;
    title.style.backgroundColor = "#232323";
    for (var i = 0; i < squares.length; i++) {
        //add colors to squares
        squares[i].style.backgroundColor = colors[i];
    }
});

easyButton.addEventListener("click", function () {
    easyButton.classList.add("active");
    hardButton.classList.remove("active");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor(0);
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        //add colors to squares
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }

    }
})

hardButton.addEventListener("click", function () {
    hardButton.classList.add("active");
    easyButton.classList.remove("active");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor(0);
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        //add colors to squares
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
})


for (var i = 0; i < squares.length; i++) {
    //add colors to squares
    squares[i].style.backgroundColor = colors[i];

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