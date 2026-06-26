const pages=document.querySelectorAll(".page");

function show(id){
pages.forEach(p=>p.classList.remove("active"));
document.getElementById(id).classList.add("active");
}

// START
document.getElementById("start").onclick=()=>{
document.getElementById("music").play();
show("counter");
spawnHeartForm();
};

// NAV
document.getElementById("next").onclick=()=>show("question");
document.getElementById("yes").onclick=()=>show("cake");

// NO ESCAPE
const no=document.getElementById("no");
no.addEventListener("mouseover",()=>{
no.style.position="absolute";
no.style.top=Math.random()*300+"px";
no.style.left=Math.random()*300+"px";
});

// COUNTER
const startDate=new Date("2024-01-01");

setInterval(()=>{
const now=new Date();
const diff=now-startDate;

document.getElementById("d").innerText=Math.floor(diff/86400000);
document.getElementById("h").innerText=Math.floor(diff/3600000)%24;
document.getElementById("m").innerText=Math.floor(diff/60000)%60;
document.getElementById("s").innerText=Math.floor(diff/1000)%60;
},1000);

// HEARTS
setInterval(()=>{
const h=document.createElement("div");
h.className="heart";
h.style.left=Math.random()*100+"vw";
document.getElementById("hearts").appendChild(h);
setTimeout(()=>h.remove(),6000);
},200);

// BLAST
document.getElementById("blow").onclick=()=>{
document.getElementById("love").classList.add("show");
show("letter");
startTyping();
};

// MESSAGE
const message=`
احبج يا كل كياني و سعادتي و يا كل الناس و اغلاهم ...
❤️❤️❤️
`;

let i=0;
function startTyping(){
document.getElementById("type").innerHTML="";
type();
}

function type(){
if(i<message.length){
document.getElementById("type").innerHTML+=message[i++];
setTimeout(type,22);
}
}

// HEART FORMATION EFFECT
function spawnHeartForm(){
const heart=document.createElement("div");
heart.innerText="💖 Fajer 💖";
heart.style.position="fixed";
heart.style.top="50%";
heart.style.left="50%";
heart.style.transform="translate(-50%,-50%)";
heart.style.fontSize="40px";
heart.style.animation="pulse 2s infinite";
document.getElementById("heartForm").appendChild(heart);

setTimeout(()=>heart.remove(),4000);
}

// SECRET BUTTON
document.getElementById("secret").onclick=()=>{
document.body.style.transform="scale(1.02)";
setTimeout(()=>document.body.style.transform="scale(1)",300);
};