var randomnumber1=Math.floor(Math.random() * 6)+1;
var randomimage1="dice"+ randomnumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src",randomimage1);
var randomnumber2=Math.floor(Math.random() * 6)+1;
var randomimage2="dice"+ randomnumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomimage2);
if(randomimage1>randomimage2)
{
    document.querySelector("h1").innerHTML="🏆 Player 1 Wins 🏆"
}
else if(randomimage1<randomimage2)
{
    document.querySelector("h1").innerHTML="🏆 Player 2 Wins 🏆"
}
else
{
    document.querySelector("h1").innerHTML="⚪️ Draw ⚪️ "
}