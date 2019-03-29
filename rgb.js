var colors = generateRandomColor(numOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("messageDisplay");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyButton = document.getElementById("easy");
var hardButton = document.getElementById("hard");
var numOfSquares = 6;
colorDisplay.textContent = pickedColor;


for(var i = 0 ; i < squares.length; i++){
//ADD intial colors to squares

squares[i].style.backgroundColor = colors[i];


// add click listeners to square
squares[i].addEventListener("click", function(){
//grab colors of clicked square

var clicked = (this.style.backgroundColor);
//compare color to pickedColor
if(clicked === pickedColor){
    messageDisplay.textContent = "correct";
    changeColors(clicked);
    resetButton.textContent = "play again";
    h1.style.background = clicked;
}else {
    this.style.backgroundColor = "#232323"
    messageDisplay.textContent = "try Again";

}

});
}

function changeColors(color){
    // loop through all squares
    for(var i = 0 ; i < squares.length ; i++){
        // change each color to match given color
 squares[i].style.backgroundColor = color;
    }
}
 function pickColor (){
  var random = Math.floor(Math.random() * colors.length);   
 return colors[random];
}

function generateRandomColor(num){
    // make an array
    var arr = []
for(var i = 0 ; i < num ; i++){
   // get random color and push into arr
arr.push(randomColor());
}
     // return that array
    return arr;
}
function randomColor(){
    // pick a red from 0 - 255
 var r =Math.floor( Math.random() * 256); 
  // pick a green from 0 - 255
 var g =Math.floor( Math.random() * 256);
  // pick a blue from 0 - 255
 var b =Math.floor( Math.random() * 256); 

 return "rgb(" + r + ", " + g + ", " + b + ")";
} 

resetButton.addEventListener("click", function(){
   // generate all new colors
   colors = generateRandomColor(numOfSquares);
   // pick new colors from an array
   pickedColor = pickColor();
   
   // change color display to match picked color
    colorDisplay.textContent = pickedColor;
// this is for the message that appers after we won the game
      messageDisplay.textContent = "";

      resetButton.textContent = "New color";


   //change colors of square
  for (var i = 0; i < squares.length; i++){
      squares[i].style.background = colors[i];
      
  }

h1.style.background = "steelblue";
})
hardButton.addEventListener("click" , function(){
    easyButton.classList.remove("selected");
    hardButton.classList.add("selected");
    colors = generateRandomColor(numOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
            squares[i].style.background = colors[i];
            squares[i].style.display = "";
    }
});

easyButton.addEventListener("click" , function(){
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    colors = generateRandomColor(numOfSquares);
    numOfSquares = 3;
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i< squares.length; i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    }
    });