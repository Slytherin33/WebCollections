// For Dice 1

// Selecting random number between 1 to 6
var randomNumber1 = Math.floor((Math.random()*6)+1);
// See setAttribute if there is confusion.....we change attribute from src i.e. dice6 (default) to random dice no. depending on what randomNumber1 comes
document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + randomNumber1 + ".png");


// For Dice 2

// Same as above
var randomNumber2 = Math.floor((Math.random()*6)+1);
// Also after comma, the pattern would be same as src = images/dice6.png
document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + randomNumber2 + ".png");


// Changing the heading(h1) depending on outcome....using if-else statements
if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML = "💥Player 1 Wins!";
}
else if(randomNumber2>randomNumber1){
  document.querySelector("h1").innerHTML = "Player 2 Wins!💥";
}
else if(randomNumber1=randomNumber2){
  document.querySelector("h1").innerHTML = "Draw!";
}
