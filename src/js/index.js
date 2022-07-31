const btnGo = document.getElementById("btn-go");
const btnBack = document.getElementById("btn-back");
const cards = document.querySelectorAll(".card");
let currentCard = 0;

function hideSelectedCard() {
    const selectedCard = document.querySelector(".selected");
    selectedCard.classList.remove("selected");
}

function showCard(indiceCard) {
    cards[indiceCard].classList.add("selected");
}

btnGo.addEventListener("click", function () {
    if (currentCard === cards.length - 1) return;

    hideSelectedCard();

    currentCard++;
    showCard(currentCard);
});

btnBack.addEventListener("click", function () {
    if (currentCard === 0) return;

    hideSelectedCard();

    currentCard--;
    showCard(currentCard);
});
