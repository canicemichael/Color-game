var numSquare = 6;
var colors = getrandomColor(numSquare);
// var colors = [
//     "rgb(255, 0, 0)",
//     "rgb(255, 255, 0)",
//     "rgb(255, 0, 255)",
//     "rgb(0, 255, 0)",
//     "rgb(0, 255, 255)",
//     "rgb(0, 0, 255)"
// ]

var colorDisplay = document.getElementById('colorDisplay');
var pickedColor = colors[randomNum()];
var square = document.querySelectorAll('.square');
var h1 = document.querySelector('h1');
var stripe = document.getElementById('tryAgain');
var btnEasy = document.getElementById('easy');
var btnHard = document.getElementById('hard');
var resetBtn = document.getElementById('reset');

resetBtn.addEventListener('click', function(){
    this.textContent = 'new colors';
    if (numSquare === 6){
        colors = getrandomColor(numSquare);
        pickedColor = colors[randomNum()];
        h1.style.backgroundColor = 'steelblue';
        colorDisplay.textContent = pickedColor;
        stripe.textContent = "";
        btnEasy.classList.remove('selected');
        btnHard.classList.remove('selected');
        this.classList.add('selected');

        for (var i = 0; i < square.length; i++){
            square[i].style.backgroundColor = colors[i];
            square[i].style.display = "block";
        }
    } else if (numSquare === 3){
        colors = getrandomColor(numSquare);
        pickedColor = colors[randomNum()];
        h1.style.backgroundColor = 'steelblue';
        colorDisplay.textContent = pickedColor;
        stripe.textContent = "";
        btnEasy.classList.remove('selected');
        btnHard.classList.remove('selected');
        this.classList.add('selected');

        for (var i = 0; i < square.length; i++){
            if (colors[i]){
                square[i].style.backgroundColor = colors[i];
            } else {
                square[i].style.display = "none";
            }
        }
    }
})

btnHard.addEventListener('click', function(){
    numSquare = 6;
    colors = getrandomColor(numSquare);
    pickedColor = colors[randomNum()];
    h1.style.backgroundColor = 'steelblue';
    colorDisplay.textContent = pickedColor;
    stripe.textContent = "";
    resetBtn.textContent = 'new colors';
    btnEasy.classList.remove('selected');
    btnHard.classList.remove('selected');
    this.classList.add('selected');

    for (var i = 0; i < square.length; i++){
        square[i].style.backgroundColor = colors[i];
        square[i].style.display = "block";
    }
});

btnEasy.addEventListener('click', function(){
    numSquare = 3;
    colors = getrandomColor(numSquare);
    pickedColor = colors[randomNum()];
    h1.style.backgroundColor = "steelblue";
    colorDisplay.textContent = pickedColor;
    stripe.textContent = "";
    resetBtn.textContent = 'new colors';
    btnEasy.classList.remove('selected');
    btnHard.classList.remove('selected');
    this.classList.add('selected');

    for (var i = 0; i < square.length; i++){
        if (colors[i]){
            square[i].style.backgroundColor = colors[i];
        } else {
            square[i].style.display = "none";
        }
    }
});

for (var i = 0; i < square.length; i++){
    square[i].style.backgroundColor = colors[i];
    

    square[i].addEventListener('click', function(){
        if (this.style.backgroundColor === pickedColor){
            square[0].style.backgroundColor = pickedColor;
            square[1].style.backgroundColor = pickedColor;
            square[2].style.backgroundColor = pickedColor;
            square[3].style.backgroundColor = pickedColor;
            square[4].style.backgroundColor = pickedColor;
            square[5].style.backgroundColor = pickedColor;
            h1.style.backgroundColor = pickedColor;
            stripe.textContent = 'Correct';
            resetBtn.textContent = 'play again?';
        } else {
            this.style.backgroundColor = '#232323';
            stripe.textContent = 'Try Again';
        }
    });
}

colorDisplay.textContent = pickedColor;

function randomNum(){
    var num = Math.floor(Math.random() * numSquare);
    return num;
}

function randomColor(){
    //generate random num for R in range 0 - 255
    var r = Math.floor(Math.random() * 256);

    //generate random num for G in range 0 - 255
    var g = Math.floor(Math.random() * 256);

    //generate random num for B in range 0 - 255
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function getrandomColor(numSquare){
    var arr = [];
    for (var i = 0; i < numSquare; i++){
        arr.push(randomColor());
    }
    return arr;
}