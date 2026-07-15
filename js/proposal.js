const yes=document.getElementById("yesBtn");

yes.onclick=function(){

    yes.innerHTML="I Love You Forever ❤️";

    setTimeout(()=>{

        window.location.href="memories.html";

    },3000);

}