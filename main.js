// Copier le code promos
const copyBtns = document.querySelectorAll(".code_promos");

copyBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const codeToCopy = btn.querySelector(".code_copy");
        const code = codeToCopy.textContent;
        navigator.clipboard.writeText(code);
    });
});

// S'abonner 
const subscribeBtn = document.querySelector(".subscribe");

subscribeBtn.addEventListener("click", () => {
    console.log("Vous êtes désormais abonner !")
});

// Effacer l'offre si la date est expirer

// function dateOffer(date) {
//     const [day, month, year] = date.split("/").map(Number);
//     return new Date (year, month -1, day);
// }

// function isExpired(date) {
//     return dateOffer(date) < new Date();
// }

// document.querySelectorAll(".valid_offer b").forEach((e, index) => {
//     const date = e.textContent.trim();

//     if(isExpired(date)){
//         const cardContainer = e.closest("#card_offer");

//         if(cardContainer){
//             cardContainer.remove();
//         }
//     }
// });