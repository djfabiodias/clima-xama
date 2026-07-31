/* ==========================================================
   XAMÃ VETERINÁRIA
   CARROSSEL DE PETS
========================================================== */

const fotosPets = [

    "assets/pets/pet1.png",
    "assets/pets/pet2.png",
    "assets/pets/pet3.png",
    "assets/pets/pet4.png",
    "assets/pets/pet5.png"

];

let indicePet = 0;

const imagemPet = document.getElementById("petImage");

function trocarPet(){

    imagemPet.style.opacity = "0";

    setTimeout(() => {

        indicePet++;

        if(indicePet >= fotosPets.length){

            indicePet = 0;

        }

        imagemPet.src = fotosPets[indicePet];

        imagemPet.style.opacity = "1";

    },500);

}

setInterval(trocarPet,7000);