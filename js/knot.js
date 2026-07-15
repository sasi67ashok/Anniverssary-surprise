/*=========================================
    PART 1
    GET HTML ELEMENTS
==========================================*/

const templePage = document.getElementById("templePage");
const marriagePage = document.getElementById("marriagePage");

const bride = document.getElementById("bride");
const groom = document.getElementById("groom");

const mangalsutra = document.getElementById("mangalsutra");

const continueBtn = document.getElementById("continueBtn");

const music = document.getElementById("bgMusic");

const flowers = document.getElementById("flowers");

const message = document.getElementById("message");


/*=========================================
    DRAG VARIABLES
==========================================*/

let isDragging = false;

let offsetX = 0;
let offsetY = 0;


/*=========================================
    START DRAG
==========================================*/

mangalsutra.addEventListener("mousedown", function(e){

    isDragging = true;

    const rect = mangalsutra.getBoundingClientRect();

    offsetX = e.clientX - rect.left;

    offsetY = e.clientY - rect.top;

    mangalsutra.style.cursor = "grabbing";

});


/*=========================================
    DRAG MOVE
==========================================*/

document.addEventListener("mousemove", function(e){

    if(!isDragging) return;

    mangalsutra.style.left =
        (e.clientX - offsetX) + "px";

    mangalsutra.style.top =
        (e.clientY - offsetY) + "px";

});


/*=========================================
    STOP DRAG
==========================================*/

document.addEventListener("mouseup", function(){

    if(!isDragging) return;

    isDragging = false;

    mangalsutra.style.cursor = "grab";

    checkMarriage();

});


/*=========================================
    CHECK WHETHER THALI REACHED BRIDE
==========================================*/

function checkMarriage(){

    const brideRect =
        bride.getBoundingClientRect();

    const thaliRect =
        mangalsutra.getBoundingClientRect();

    const brideNeckX =
        brideRect.left +
        brideRect.width * 0.48;

    const brideNeckY =
        brideRect.top +
        brideRect.height * 0.20;

    const thaliCenterX =
        thaliRect.left +
        thaliRect.width / 2;

    const thaliCenterY =
        thaliRect.top +
        thaliRect.height / 2;

    const distance = Math.sqrt(

        Math.pow(thaliCenterX-brideNeckX,2)

        +

        Math.pow(thaliCenterY-brideNeckY,2)

    );

    console.log("Distance =",distance);

    if(distance < 80){

        marriageSuccess();

    }

}


/*=========================================
    SUCCESS FUNCTION
==========================================*/

function marriageSuccess(){

    alert("Marriage Success ❤️");

    music.currentTime = 0;

    music.play();

}

/*=========================================
    PART 2
    SUCCESS ANIMATION
==========================================*/

function marriageSuccess(){

    // Prevent multiple triggers
    if(marriagePage.classList.contains("show")){
        return;
    }

    /* Snap thali to bride neck */

    const brideRect = bride.getBoundingClientRect();

    mangalsutra.style.left =
        (brideRect.left + brideRect.width * 0.42) + "px";

    mangalsutra.style.top =
        (brideRect.top + brideRect.height * 0.18) + "px";

    mangalsutra.style.pointerEvents = "none";

    /* Start Music */

    music.currentTime = 0;

    music.play();

    playTempleBell();

    /* Create Effects */

    createFlowers();

    createHearts();

    createSparkles();

    /* Wait 2 Seconds */

    setTimeout(function(){

        templePage.classList.add("fadeOut");

        setTimeout(function(){

            templePage.style.display="none";

            marriagePage.style.display="flex";

            marriagePage.classList.add("show");

        },1000);

    },2000);

}


/*=========================================
    FLOWER EFFECT
==========================================*/

function createFlowers(){

    for(let i=0;i<60;i++){

        const flower=document.createElement("div");

        flower.className="flower";

        flower.innerHTML="🌸";

        flower.style.left=Math.random()*window.innerWidth+"px";

        flower.style.animationDuration=(4+Math.random()*4)+"s";

        flower.style.fontSize=(18+Math.random()*22)+"px";

        flowers.appendChild(flower);

        setTimeout(function(){

            flower.remove();

        },8000);

    }

}


/*=========================================
    HEART EFFECT
==========================================*/

function createHearts(){

    for(let i=0;i<40;i++){

        const heart=document.createElement("div");

        heart.className="heart";

        heart.innerHTML="❤️";

        heart.style.left=Math.random()*window.innerWidth+"px";

        heart.style.animationDuration=(5+Math.random()*3)+"s";

        heart.style.fontSize=(20+Math.random()*25)+"px";

        document.body.appendChild(heart);

        setTimeout(function(){

            heart.remove();

        },8000);

    }

}


/*=========================================
    SPARKLES
==========================================*/

function createSparkles(){

    for(let i=0;i<80;i++){

        const sparkle=document.createElement("div");

        sparkle.className="sparkle";

        sparkle.style.left=
        (window.innerWidth/2 + (Math.random()*500-250))+"px";

        sparkle.style.top=
        (window.innerHeight/2 + (Math.random()*350-175))+"px";

        document.body.appendChild(sparkle);

        setTimeout(function(){

            sparkle.remove();

        },1500);

    }

}


/*=========================================
    TEMPLE BELLS
==========================================*/

function playTempleBell(){

    const bell=new Audio("music/bell.mp3");

    bell.play();

}

/*=========================================
    PART 3
    WAIT UNTIL MUSIC FINISHES
=========================================*/

music.addEventListener("ended", function(){

    continueBtn.style.display = "inline-block";

    continueBtn.classList.add("fadeIn");

});


/*=========================================
    CONTINUE BUTTON
=========================================*/

continueBtn.addEventListener("click", function(){

    document.body.classList.add("fadeOut");

    setTimeout(function(){

        window.location.href = "proposal.html";

    },1000);

});


/*=========================================
    DOUBLE CLICK PROTECTION
=========================================*/

continueBtn.addEventListener("dblclick", function(e){

    e.preventDefault();

});


/*=========================================
    WINDOW RESIZE
=========================================*/

window.addEventListener("resize", function(){

    if(isDragging){

        isDragging = false;

    }

});


/*=========================================
    DISABLE IMAGE DRAG
=========================================*/

document.querySelectorAll("img").forEach(function(img){

    img.addEventListener("dragstart", function(e){

        e.preventDefault();

    });

});


/*=========================================
    OPTIONAL INTRO ANIMATION
=========================================*/

window.addEventListener("load", function(){

    templePage.classList.add("fadeIn");

});


/*=========================================
    OPTIONAL CLICK EFFECT
=========================================*/

document.addEventListener("click", function(e){

    const circle = document.createElement("div");

    circle.style.position = "absolute";

    circle.style.width = "20px";

    circle.style.height = "20px";

    circle.style.borderRadius = "50%";

    circle.style.background = "rgba(255,215,0,0.7)";

    circle.style.left = (e.pageX - 10) + "px";

    circle.style.top = (e.pageY - 10) + "px";

    circle.style.pointerEvents = "none";

    circle.style.animation = "sparkleAnim 0.8s linear forwards";

    document.body.appendChild(circle);

    setTimeout(function(){

        circle.remove();

    },800);

});


/*=========================================
    CONSOLE MESSAGE
=========================================*/

console.log("❤️ Happy Anniversary ❤️");