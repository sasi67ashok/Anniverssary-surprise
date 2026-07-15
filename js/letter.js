const btn=document.getElementById("openBtn");
const envelope=document.getElementById("envelope");
const letter=document.getElementById("letter");
const typing=document.getElementById("typing");
const finalBtn=document.getElementById("finalBtn");

const text=`My Dearest Husband ❤️,

Happy Anniversary, My Love.

Sometimes I wonder...
How did a simple meeting turn into the most beautiful chapter of my life?

From the day you came into my life,
nothing has ever been the same.

You became my best friend,
my biggest strength,
my safe place,
and the person I always want to come home to.

These three years weren't perfect...
We had misunderstandings,
we had difficult days,
and we faced moments that tested us.

But even through every challenge,
one thing never changed...

My love for you.

Every laugh we shared...
Every trip we went on...
Every late-night conversation...
Every silly fight...
Every hug that made everything feel okay...

All of them became my favourite memories.

Today, when I look back,
I don't remember the problems.

I remember us...
Choosing each other,
again and again.

And now...
God has blessed us with the most precious gift of all.

A tiny little heartbeat...
A beautiful little miracle...
A piece of you and me,
growing inside me every single day. 👶❤️

Soon,
our little one will call you "Appa."

And I already know...

You'll be the most loving,
most caring,
and most amazing father.

Seeing you become a dad
is one of the biggest blessings of my life.

Our love story is no longer just about
'You and Me.'

It's becoming...

'Us...
and our little miracle.'

Thank you...

Thank you for every smile you gave me.

Thank you for holding my hand
through every season of life.

Thank you for believing in us.

No matter where life takes us...

No matter how many years pass...

If I had the chance to choose again...

I would still choose you.

Again...

Again...

And forever.

Happy 3rd Anniversary ❤️

Forever Yours,

❤️ Sasirekha`;

btn.onclick=function(){

envelope.style.display="none";

letter.style.display="block";

let i=0;

typing.innerHTML="";

function typeWriter(){

if(i<text.length){

typing.innerHTML+=text.charAt(i);

i++;

setTimeout(typeWriter,25);

}
else{

// Make sure full letter stays visible
typing.innerHTML=text;

// Show button only after typing completes
finalBtn.style.display="block";

// Scroll to the bottom so the button is visible
finalBtn.scrollIntoView({
behavior:"smooth"
});

}

}

typeWriter();

}

function nextPage(){

window.location.href="final.html";

}