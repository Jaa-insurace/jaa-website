// ==============================

// JAA INSURANCE WEBSITE

// Premium JavaScript

// ==============================

// Scroll Animation

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{

    threshold:0.15

});

document.querySelectorAll(

".about,.services,.gallery,.contact,.box"

).forEach(section=>{

    observer.observe(section);

});

// ==============================

// Gallery Lightbox

// ==============================

const lightbox=document.createElement("div");

lightbox.id="lightbox";

lightbox.innerHTML=`

<img id="lightbox-img">

`;

document.body.appendChild(lightbox);

const lightImg=document.getElementById("lightbox-img");

document.querySelectorAll(".gallery img").forEach(img=>{

    img.addEventListener("click",()=>{

        lightbox.classList.add("active");

        lightImg.src=img.src;

    });

});

lightbox.addEventListener("click",()=>{

    lightbox.classList.remove("active");

});

// ==============================

// Floating LINE Button

// ==============================

const lineBtn=document.createElement("a");

lineBtn.href="https://line.me/ti/p/XhnnzW3sb5";

lineBtn.className="floating-line";

lineBtn.target="_blank";

lineBtn.innerHTML="💚";

document.body.appendChild(lineBtn);

// ==============================

// Header Effect

// ==============================

window.addEventListener("scroll",()=>{

    const hero=document.querySelector(".hero");

    if(window.scrollY>100){

        hero.style.filter="brightness(.92)";

    }else{

        hero.style.filter="brightness(1)";

    }

});

// ==============================

// Image Hover Effect

// ==============================

document.querySelectorAll(".gallery img").forEach(img=>{

img.addEventListener("mouseenter",()=>{

img.style.transform="scale(1.04)";

});

img.addEventListener("mouseleave",()=>{

img.style.transform="scale(1)";

});

});
