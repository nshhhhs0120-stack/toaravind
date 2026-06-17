function showPage(pageId){

    let pages = document.querySelectorAll('.page');

    pages.forEach(page => page.classList.remove('active'));

    document.getElementById(pageId).classList.add('active');

    let bgMusic = document.getElementById("bgMusic");
    let videoMusic = document.getElementById("videoMusic");

    // IF VIDEO PAGE OPENED
    if(pageId === "page4"){

        if(bgMusic){
            bgMusic.pause();   // stop main music
        }

        if(videoMusic){
            videoMusic.play().catch(()=>{});
        }
    }

    // IF LEAVE VIDEO PAGE
    if(pageId !== "page4"){

        if(videoMusic){
            videoMusic.pause();
            videoMusic.currentTime = 0;
        }

        if(bgMusic){
            bgMusic.play().catch(()=>{});
        }
    }

    if(pageId === "page3"){
        showMemories();
    }
}

function proposal(){

    document.getElementById("yesBtn").style.display = "none";
    document.getElementById("noBtn").style.display = "none";

    heartExplosion();

    typeWriter(
`❤️ That's My Boy ❤️


Thank you for choosing me
Thank you for loving me
Thank you for being my favorite person

Thank you for every smile,
every memory,
and every beautiful moment.

Happy 6th Anniversary ❤️

Forever Starts With You ❤️`,
    "proposalMessage"
    );

}
function heartExplosion(){

    for(let i=0;i<100;i++){

        let heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";

        heart.style.left = "50%";
        heart.style.top = "50%";

        heart.style.fontSize =
        (20 + Math.random()*40) + "px";

        heart.style.zIndex = "9999";

        let x = (Math.random()-0.5)*1200;
        let y = (Math.random()-0.5)*1200;

        heart.style.transition = "2s";

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.style.transform =
            `translate(${x}px, ${y}px)`;

            heart.style.opacity = "0";

        },10);

        setTimeout(()=>{
            heart.remove();
        },2000);
    }
}


function createHearts(){

    for(let i=0;i<30;i++){

        let heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";
        heart.style.left = Math.random()*100 + "vw";
        heart.style.top = Math.random()*100 + "vh";
        heart.style.fontSize = "30px";
        heart.style.zIndex = "999";

        document.body.appendChild(heart);

        setTimeout(()=>{
            heart.remove();
        },3000);
    }
}
let photos = [
"images/image1.jpg",
"images/image2.jpg",
"images/image3.jpg",
"images/image4.jpg",
"images/image5.jpg",
"images/image6.jpg",
"images/image7.jpg",
"images/image8.jpg",
"images/image9.jpg",
"images/image10.jpg",
"images/image11.jpg",
"images/image12.jpg",
"images/image13.jpg",
"images/image14.jpg",
"images/image15.jpg",
"images/image16.jpg",
"images/image17.jpg",
"images/image18.jpg",
"images/image19.jpg",
"images/image20.jpg",
"images/image21.jpg",
"images/image22.jpg",
"images/image23.jpg"
];

function showMemories(){
    let container = document.getElementById("memoryContainer");

    let i = 0;

    setInterval(() => {

        if(i >= photos.length){
            i = 0;
            container.innerHTML = "";
        }

        let img = document.createElement("img");
        let captions = [
        "Our first smile ❤️",
        "My favorite person ❤️",
        "Beautiful memories ❤️",
        "You and me ❤️",
        "My comfort place ❤️",
        "Forever together ❤️",
        "Endless laughter ❤️",
        "My happy place ❤️",
        "Our journey ❤️",
        "My heart ❤️"
        ];
        img.src = photos[i];
        img.className = "memory";
        img.onclick = function(){

            if(img.classList.contains("zoomed")){
                img.classList.remove("zoomed");
            }else{
                img.classList.add("zoomed");
            }
        };
        img.style.left = Math.random() * 80 + "vw";
        img.style.top = Math.random() * 70 + "vh";

        container.appendChild(img);

        setTimeout(() => {
            img.remove();
        }, 5000);

        i++;

    }, 800);
}
let noCount = 0;

function noAnswer(){

    let noBtn = document.getElementById("noBtn");

    noCount++;
    let yesBtn = document.getElementById("yesBtn");

    let currentSize = 22 + (noCount * 5);

    yesBtn.style.fontSize = currentSize + "px";

    let messages = [
        "Are you sure? 🥺",
        "Really sure? 😭",
        "Think again ❤️",
        "You love me 😏",
        "Wrong answer 😂",
        "Click YES ❤️"
    ];

    if(noCount <= messages.length){
        noBtn.innerHTML = messages[noCount - 1];
    }

}
document.addEventListener("DOMContentLoaded", ()=>{

    let noBtn = document.getElementById("noBtn");

    noBtn.addEventListener("mouseover", ()=>{

        let x = Math.random() * 400;
        let y = Math.random() * 200;

        noBtn.style.left = x + "px";
        noBtn.style.top = y + "px";

    });

});
function typeWriter(text, elementId){

    let i = 0;
    let speed = 50;

    document.getElementById(elementId).innerHTML = "";

    function typing(){

        if(i < text.length){

            document.getElementById(elementId).innerHTML += text.charAt(i);

            i++;

            setTimeout(typing, speed);
        }
    }

    typing();
}
function updateLoveCounter(){

    let startDate = new Date("2020-06-26"); // CHANGE THIS

    let today = new Date();

    let diff = today - startDate;

    let days = Math.floor(diff / (1000*60*60*24));

    document.getElementById("countdown").innerHTML =
    `❤️ Together for ${days} days ❤️`;
}

updateLoveCounter();
document.addEventListener("DOMContentLoaded", ()=>{

    let heart = document.getElementById("secretHeart");

    if(heart){

        heart.onclick = ()=>{

            let msg = document.getElementById("secretMessage");

            msg.style.display = "block";
        };
    }

});
document.addEventListener("DOMContentLoaded", ()=>{

    let heart = document.getElementById("secretHeart");

    if(heart){

        heart.onclick = ()=>{

            let msg = document.getElementById("secretMessage");

            if(msg.style.display === "block"){

                msg.style.display = "none";

            }else{

                msg.style.display = "block";

            }

        };

    }

});
document.addEventListener("click", () => {

    let bgMusic = document.getElementById("bgMusic");

    if(bgMusic){
        bgMusic.play().catch(()=>{});
    }

}, { once: true });
