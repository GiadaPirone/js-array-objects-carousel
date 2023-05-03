const immagini = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// const contenitoreSlide = document.getElementById("slideBox");
const btnAvanti = document.getElementById("btn1");
const btnIndietro = document.getElementById("btn2");
const cont = document.querySelector(".contenitore")

immagini.forEach ((elemento, index) => {

    contenitoreSlide = document.createElement("div");
    
    // console.log(" immagine ", elemento.image);
    contImg = `<img src="./${elemento.image}" alt="" class="slide" >`;
    contenitoreSlide.className = "pRelative"
    contenitoreSlide.innerHTML += contImg;
    
    
    nuovoH2 = document.createElement("h2");
    nuovoH2.innerText = `${elemento.title}`;
    contenitoreSlide.appendChild(nuovoH2);
    nuovoH2.className = "absolutH2";
    
    nuovoP = document.createElement("p");
    nuovoP.innerText = `${ elemento.text }`;
    contenitoreSlide.appendChild(nuovoP);
    nuovoP.className = "absolutP";
    
    console.log(contenitoreSlide);
    
    
    if ( index > 0){
        contenitoreSlide.className += " dNone";
    }
    
    cont.appendChild(contenitoreSlide);
});

tuttiDiv = document.querySelectorAll(".contenitore > div");
console.log(tuttiDiv);
let slideCorrente = 0;

btnAvanti.addEventListener("click", function(){

    tuttiDiv[slideCorrente].classList.add("dNone");
    tuttiDiv[slideCorrente+1].classList.remove("dNone");
    slideCorrente++;

})




