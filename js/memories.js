const video = document.getElementById("memoryVideo");
const quote = document.getElementById("quote");

const quotes = [

"Our story began with a beautiful hello... ❤️",

"Two hearts... One beautiful journey... 💕",

"Every smile of yours became my happiness 😊",

"You held my hand through every season of life 🤝",

"We laughed together... ❤️",

"We cried together...",

"We grew together... 🌸",

"Our love became stronger every single day ❤️",

"Then came the most beautiful surprise... 👶✨",

"Our little miracle was on the way 🤰",

"Every heartbeat of our baby filled us with hope 💓",

"Our tiny blessing made our love complete ❤️",

"You are becoming the most amazing father 👨‍👧",

"I can't wait to see you holding our little one 🥹",

"Soon our love story becomes a beautiful family 👨‍👩‍👧",

"Our baby is already the greatest gift of our love 🎁",

"Our forever starts with you... and now with our little one ❤️",

"Happy Anniversary My Love ❤️"

];

let index = 0;
let timer = null;

function startQuotes() {

    quote.innerHTML = quotes[0];
    quote.style.opacity = "1";

    timer = setInterval(() => {

        index++;

        // Stop when all quotes are finished
        if (index >= quotes.length) {

            clearInterval(timer);
            timer = null;

            return;
        }

        quote.style.opacity = "0";

        setTimeout(() => {

            quote.innerHTML = quotes[index];
            quote.style.opacity = "1";

        }, 500);

    }, 5000);

}

video.addEventListener("play",()=>{

    if(timer!==null) return;

    startQuotes();

});

video.addEventListener("pause",()=>{

    clearInterval(timer);
    timer=null;

});

video.addEventListener("ended",()=>{

    clearInterval(timer);
    timer=null;
    window.location.href = "letter.html";

});

