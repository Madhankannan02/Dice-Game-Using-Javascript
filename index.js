var randomNumber1=Math.floor(Math.random()*6+1);
var randomimage="dice"+randomNumber1+".png";
var rand="./"+randomimage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",rand);

var randomNumber2=Math.floor(Math.random()*6+1);
var randomimage2="dice"+randomNumber2+".png";
var rand2="./"+randomimage2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",rand2);

if (randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="Player 1 wins"; }

  else if (randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 wins"; }
    else{
      document.querySelector("h1").innerHTML="Draw";
    }
