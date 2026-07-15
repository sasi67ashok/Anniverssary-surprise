const envelope=document.querySelector(".envelope");

const card=document.getElementById("card");

const container=document.getElementById("envelopeContainer");

envelope.onclick=function(){

container.style.display="none";

card.style.display="block";

}

document.getElementById("nextBtn").onclick=function(){

window.location.href="knot.html";

}