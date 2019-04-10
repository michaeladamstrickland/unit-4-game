
$(function(){
var yourScore = document.getElementById('yourScore');
//var yourScore = getElementById(red, blue, yellow, green.onclick(math.sum));
yourScore.innerHTML = 0;
$('#buttons').on("click", function(){
    $(this).append(yourScore)
});
var targetScore = document.getElementById('targetScore');
targetScore.innerHTML = getRandomValue(10, 4);

function addToScore(val) {
  var numberToAdd = parseInt(val);
  var currentScore = parseInt(yourScore.innerHTML);
  yourScore.innerHTML = numberToAdd + currentScore;
  $('#buttons').on('click', function(){
    $(this).append(yourScore)
});
}
var redValue = Math.floor(Math.random()*12+1);
var blueValue = Math.floor(Math.random()*12+1);
var yellowValue = Math.floor(Math.random()*12+1);
var greenValue = Math.floor(Math.random()*12+1);


console.log(redValue);


var blue = document.getElementById("blue");
console.log(blueValue);

var yellow = document.getElementById("yellow");
console.log(yellowValue);

var green = document.getElementById("green");
console.log(greenValue);

// add an event listener to elements
$('#buttons').on('click', function(){
    $(this).append(numberToAdd)
});

function redIncrement()
{
   
    playerScore+=redValue;
    console.log(playerScore);
    $("#player-score").text("Your total score is: " + playerScore);   
    checkWin();
}
// When Trix is clicked
function blueIncrement()
{
    playerScore+=blueValue;
    //console.log(playerScore);
    $("#player-score").text("Your total score is: " + playerScore);   
    checkWin();
}
// When Coco is clicked
function greenIncrement()
{
    playerScore+=greenValue;
    //console.log(playerScore);
    $("#player-score").text("Your total score is: " + playerScore);   
    checkWin();
}
// When Lucky is clicked
function yellowIncrement()
{
    playerScore+=yellowValue;
    //console.log(playerScore);
    $("#player-score").text("Your total score is: " + playerScore);   
    checkWin();
}
// If playerScore matches randomScore
function win() 
{
    alert("You win!");
    wins++;
    resetGame();
    $("#wins").text("Wins: " + wins);
}
// If playerScore does not match randomScore
function lose() 
{
    alert("lose");
    losses++;
    resetGame();
}
// When Characters are clicked check to see if it's a win
function checkWin() 
{
    if(playerScore === randomScore)
    {
        alert("You win!")
        wins++;
        $("#wins").text("Wins: " + wins);
        resetGame();
        
    }  else if (playerScore > randomScore)
        {
            alert("You lose!");
            losses++;
            $("#losses").text("Losses: " + losses);
            resetGame();
        }
}
//var sum = parseInt(red.value) + parseInt(blue.value) + parseInt(yelow.value) + parseInt(green.value);

// console.log (sum);
function getRandomValue (a, b){
  return Math.floor((Math.random() * a) + b);
}

function checkPlayerScore() {
  //yourScore, targetScore (parseFloat() is for decimals)
  var playerInt = parseInt(yourScore.innerHTML);
  var targetInt = parseInt(targetScore.innerHTML);
  if (playerInt === targetInt) {
      alert('You win!');
  } else if (playerInt > targetInt) {
    alert('You lose!');
  } 
}
});
//console.log(getRandomValue(10, 4));