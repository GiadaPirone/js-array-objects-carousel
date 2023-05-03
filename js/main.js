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

const contenitoreSlide = document.getElementById("slideBox");
const btnAvanti = document.getElementById("btn1");
const btnIndietro = document.getElementById("btn2");

immagini.forEach ((elemento) => {

    // console.log(" immagine ", elemento.image);
    contImg = `<img src="./${elemento.image}" alt="" id="slide" >`;
    contenitoreSlide.className = "pRelative"
    contenitoreSlide.innerHTML += contImg;

    nuovoH2 = document.createElement("h2");
    nuovoH2.innerText = `${elemento.title}`;
    document.querySelector("#slideBox").appendChild(nuovoH2);
    nuovoH2.className = "absolutH2";

    nuovoP = document.createElement("p");
    nuovoP.innerText = `${ elemento.text }`;
    document.querySelector("#slideBox").appendChild(nuovoP);
    nuovoP.className = "absolutP";

    
});

btnAvanti.addEventListener("click", function(){

    for (let i = i; i < immagini.length; i++) {
        const immagineCorrente = array[i];

        console.log(immagineCorrente)
        
    }
})


