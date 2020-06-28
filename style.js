function func()
{var ar=["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"];
var p1=Math.floor(Math.random()*6);
document.getElementById("p1").firstElementChild.src=ar[p1];
var p2=Math.floor(Math.random()*6);
document.getElementById("p2").firstElementChild.src=ar[p2];
if((p1+1)>(p2+1))
    document.getElementById("res").innerHTML="Player 1 wins"
else if((p1+1)<(p2+1))
    document.getElementById("res").innerHTML="Player 2 wins"
else
   document.getElementById("res").innerHTML="Draw"
}