var randomNumber1=Math.floor(Math.random()*6)+1;
var randomImg="dice"+randomNumber1+".png";
var randomSrc="images/"+randomImg;
var img1= document.querySelectorAll("img")[0];
img1.setAttribute("src",randomSrc);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImg2="dice"+randomNumber2+".png";
var randomSrc2="images/"+randomImg2;
var img2= document.querySelectorAll("img")[1];
img2.setAttribute("src",randomSrc2);

 if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="🚩Player 1 Wins!";
 }
 else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins!🚩";
 }
 else{
    document.querySelector("h1").innerHTML="Draw!";
 }
