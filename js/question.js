const noBtn=document.getElementById("noBtn");

const yesBtn=document.getElementById("yesBtn");

const funny=document.getElementById("funnyText");

const messages=[

"😂 Nice Try!",

"😜 Nope Nope Nope!",

"🤭 You can't reject me!",

"🥰 Your destiny is YES!",

"❤️ I'm your wife forever!",

"😂 Stop chasing NO!",

"💍 Only YES Works!",

"😍 You know you love me!",

"❤️ Click YES My Love!"

];

let attempt=0;

let yesWidth=170;

let yesHeight=65;

function moveNo(){

const area=document.querySelector(".buttonArea");

const maxX=area.clientWidth-noBtn.offsetWidth;

const maxY=area.clientHeight-noBtn.offsetHeight;

const x=Math.random()*maxX;

const y=Math.random()*maxY;

noBtn.style.left=x+"px";

noBtn.style.top=y+"px";

funny.innerHTML=messages[attempt%messages.length];

attempt++;

yesWidth+=15;

yesHeight+=5;

yesBtn.style.width=yesWidth+"px";

yesBtn.style.height=yesHeight+"px";

}

noBtn.addEventListener("mouseenter",moveNo);

noBtn.addEventListener("click",moveNo);

yesBtn.onclick=function(){

window.location.href="invitation.html";

}