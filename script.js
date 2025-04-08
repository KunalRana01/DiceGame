
var p1 = Math.floor((Math.random()*6+1));
var p2 = Math.floor((Math.random()*6+1));

document.querySelector("img").setAttribute("src" , "./images/dice"+[p1]+".png");

document.querySelectorAll("img")[1].setAttribute("src" , "./images/dice"+[p2]+".png")


if(p1>p2){
    document.querySelector("h1").innerHTML="<h1 class='heading'> Player 1 Won !🚩</h1>"
} else if(p1==p2){
    document.querySelector("h1").innerHTML="<h1 class='heading'> 😓 Its a Draw !</h1>"
} else{
    document.querySelector("h1").innerHTML = "<h1 class='heading'> 🚩 Player 2 Won !</h1>"
}
