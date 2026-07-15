const btn=document.getElementById("openBtn");
const envelope=document.getElementById("envelope");
const letter=document.getElementById("letter");
const typing=document.getElementById("typing");
const finalBtn=document.getElementById("finalBtn");

const text=`My Dearest Husband ❤️,

Happy Anniversary, My Love.

Namaku Marriage Aagi 3 Years aagudhu So idhuku yedaila namma neraya face pannitom

Love ❤️, Care , Romance , Feelings , Emotions , Fights , Veruppu , Kovam ipdi neraya

Aanalum ego illama serndhurukom so idhudhan love pola orutharku oruthar adjust pannitu poradhu

But oru sila Vishayathula nee konjam selfish aa illama ennayum purinji nadandhukanum

Naa edhumey pudikama verupoda onnum create panni sollamaaten naa enna face panren adhudhan solluven.

And naa unaku unmaya mattumdhan irundhuruken eppavumey enaku bold aa face to face solradhu dhan valakam

adhum from starting of our life to upto now and ever kooda naa apdidhan bold aa dhan irupen

But nee last 1 Year aa enna romba hurt pannita unnala oru happiness kedachidhu adhudhan yennoda Laddu 

But andha happiness nee enaku kudukaama edhaachi solli hurt pannita 

You know pregnancy time la husband support physically and mentally illama thaniya irukardhu evlo pain 

theriyumaa i faced a lot from 3 years please try to understand my feeling and dont hurt me.

idhanaala naa dipress aagi vittu poidlam nu lam nenachiruken unkita solliyum iruken 

but yen baby ku parents theva iruku adhuku naa punishment kuduka virumbala.

I Love You and Happy Anniversary....

And now...
God has blessed us with the most precious gift of all.
Nee naan aasa patta oru miracle

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
is one of the biggest blessings of my life
Naa paakanum nee Daddy aa yen baby ku ennalam pannuva nu.

Our love story is no longer just about
'You and Me.'

It's becoming...

'Us...
and our little miracle.'

Thank you...ō

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