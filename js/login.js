const loadingMessages = [

"Initializing Love Engine ❤️",

"Checking Anniversary Database 💍",

"Scanning Husband 😊",

"Loading Beautiful Memories 📸",

"Verifying Forever Promise ❤️",

"Access Granted ❤️"

];

let i=0;

const loading=document.getElementById("loadingText");

const interval=setInterval(()=>{

loading.innerHTML=loadingMessages[i];

i++;

if(i==loadingMessages.length){

clearInterval(interval);

setTimeout(()=>{

document.getElementById("loadingScreen").style.display="none";

document.getElementById("loginContainer").style.display="block";

},1000);

}

},1500);

function login(){

const username=document.getElementById("username").value;

const password=document.getElementById("password").value;

if(username==="Ashoksasi" && password==="Laddu@22"){

window.location.href="question.html";

}

else{

alert("Wrong Credentials ❤️");

}

}