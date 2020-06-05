var randomNumber1 = Math.floor(Math.random() * 6) + 1;//rand for first dice
var randomNumber2 = Math.floor(Math.random() * 6) + 1;//rand for second dice

var diceImage1 = "images/dice" + randomNumber1 + ".png";//first image
var diceImage2 = "images/dice" + randomNumber2 + ".png";//second image


document.querySelector(".img1").setAttribute("src", diceImage1);//changing first image
document.querySelector(".img2").setAttribute("src", diceImage2);//changing second image


//changing the h1 based on dice roll
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
if (randomNumber1 == randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw";
}
