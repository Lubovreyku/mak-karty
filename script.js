const cards = [
  "cards/card1.png", "cards/card2.png", "cards/card3.png",
  "cards/card4.png", "cards/card5.png", "cards/card6.png",
  "cards/card7.png", "cards/card8.png", "cards/card9.png",
  "cards/card10.png", "cards/card11.png"
];

function drawCard() {
  const image = document.getElementById("cardImage");
  const randomIndex = Math.floor(Math.random() * cards.length);
  image.src = cards[randomIndex];
}
