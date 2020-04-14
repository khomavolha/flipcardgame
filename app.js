document.addEventListener("DOMContentLoaded", () => {
  const cardArray = [
    {
      name: "cheeseburger",
      img: "jmg/cheeseburger.png",
    },

    {
      name: "cheeseburger",
      img: "jmg/cheeseburger.png",
    },

    {
      name: "fries",
      img: "jmg/fries.png",
    },

    {
      name: "fries",
      img: "jmg/fries.png",
    },

    {
      name: "hotdog",
      img: "jmg/hotdog.png",
    },

    {
      name: "hotdog",
      img: "jmg/hotdog.png",
    },

    {
      name: "ice-cream",
      img: "jmg/ice-cream.png",
    },

    {
      name: "ice-cream",
      img: "jmg/ice-cream.png",
    },

    {
      name: "milkshake",
      img: "jmg/milkshake.png",
    },

    {
      name: "milkshake",
      img: "jmg/milkshake.png",
    },

    {
      name: "pizza",
      img: "jmg/pizza.png",
    },

    {
      name: "pizza",
      img: "jmg/pizza.png",
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  var cardsChosen = [];
  var cardsChosenId = [];
  var cardsWon = [];

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "jmg/back.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipcard);
      grid.appendChild(card);
    }
  }

  function checkForMatch() {
    var cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
      cards[optionOneId].setAttribute("src", "jmg/white.png");
      cards[optionTwoId].setAttribute("src", "jmg/white.png");
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "jmg/back.png");
      cards[optionTwoId].setAttribute("src", "jmg/back.png");
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = "Поздравляем! Вы победили";
    }
  }

  function flipcard() {
    var cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }
  createBoard();
});
