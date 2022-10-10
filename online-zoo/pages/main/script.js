const burgerIcon = document.querySelector(".menu__burger-icon");
const menu = burgerIcon.parentElement.childNodes[3];
const body = document.querySelector("body");

burgerIcon.addEventListener("click", (e) => {

  //function closed burger menu
  function closeBurgerMenu() {
    if (document.querySelector(".menu_burger-open")) {
      document.querySelector(".header").childNodes[1].childNodes[1].childNodes[1].classList.remove("logo_orange");
      document.querySelector(".menu_burger-open").classList.remove("menu_burger-open");
    } 
  };
  //open beurger menu
  burgerIcon.parentElement.childNodes[3].classList.add("menu_burger-open");
  //change color of logo
  document.querySelector(".header").childNodes[1].childNodes[1].childNodes[1].classList.add("logo_orange");
  // block scroll for body 
  body.classList.add("body_popup_open");
  
  body.addEventListener("click", (e) => {
    // if click out of menu - close burger menu
    if ( ( ! e.path.includes(menu)) && (e.target !== burgerIcon) ) {
      closeBurgerMenu();
      body.classList.remove("body_popup_open");
      body.removeEventListener;
    }
  });

  //close burger menu after click to close-icon
  document.querySelector(".close-icon").addEventListener("click", (e) => {
      closeBurgerMenu();
  });
  
});

//take all cards with animal
const animalCards = document.querySelectorAll(".cards__card");

//function shuffle array for nodelist
function shuffleArray(arr) {
  const newArr = Array.from(arr);
  let j = 0;
  let temp = 0;
  for (let i = newArr.length - 1; i > 0 ; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = newArr[i];
    newArr[i] = newArr[j];
    newArr[j] = temp;
  };
  return newArr;
}

//function create div with new order cards
function createNewOrderCards(arr, position) {
  let div = document.createElement("div");
  div.className = "cards__items cards__items_"+position;
  arr.forEach(card => {
    div.append(card);
  });
  return div;
}

//repair hidden modificator
function repairHidden(arr, leng) {
  for (let i = 0; i < arr.childNodes.length; i++) {
    if (i < leng) {
      if (arr.childNodes[i].classList.contains("cards__card_hidden")) {
        arr.childNodes[i].classList.remove("cards__card_hidden");
      }
    } else {
      if ( ! arr.childNodes[i].classList.contains("cards__card_hidden")) {
        arr.childNodes[i].classList.add("cards__card_hidden")
      }
    }
  }
}

//random cards after load page
document.addEventListener("DOMContentLoaded", () => {
  let oldCards = document.querySelector(".cards__items");
  let newOrder = shuffleArray(animalCards);
  let newCards = createNewOrderCards(newOrder, "center");
  repairHidden(newCards, 6);
  document.querySelector(".cards").childNodes[3].replaceChild(newCards, oldCards);
});

function clearHidden(arr) {
  arr.forEach(elem => {
    if (elem.classList.contains("cards__card_hidden")) {
      elem.classList.remove("cards__card_hidden");
    }
  });
}
//create node cards__items with left, rigth or center
function createCardsItems(arr, position) {
  let newNode = document.createElement("div");
  arr.forEach(elem => {
    newNode.append(elem);
  });
  newNode.className = "cards__items cards__items_"+position;
}

//click to right arrow
document.querySelector(".cards__arrow-right").addEventListener("click", () => {
  // let collectionAnimals = document.querySelectorAll(".cards__card");
  // let shuffledAminals = shuffleArray(collectionAnimals);
  // let newCardsItemsRight = createCardsItems(shuffledAminals, "right");
  // console.log(shuffledAminals);
  let oldCards = document.querySelector(".cards__items");
  let newOrder = shuffleArray(animalCards);
  let newCards = createNewOrderCards(newOrder);
  repairHidden(newCards, 6);
  document.querySelector(".cards").childNodes[3].replaceChild(newCards, oldCards);
});

//click to left arrow
document.querySelector(".cards__arrow-left").addEventListener("click", () => {
  let oldCards = document.querySelector(".cards__items");
  let newOrder = shuffleArray(animalCards);
  let newCards = createNewOrderCards(newOrder);
  repairHidden(newCards, 6);
  document.querySelector(".cards").childNodes[3].replaceChild(newCards, oldCards);
});