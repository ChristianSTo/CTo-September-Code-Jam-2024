import "../pages/index.css";
// import "../scripts/EventPopup.js";
import EventPopups from "../scripts/EventPopup.js";
import Event from "../scripts/Event.js";
import Section from "../scripts/Section.js";

import pumpkinPatchImage from "../images/pumpkinpatch.png";
import costumeImage from "../images/costume.png";
import fallFestivalImage from "../images/fallfestival.png";

// //  import Elvin
// import breadRecipesImage from "../images/bread.png";
// import pastaRecipeImage from "../images/pasta.png";
// import ingredientsPasta from "../images/ingredientspasta.png";
// import ingredientsBread from "../images/ingredientsbread.png";
// import Recipe from "../scripts/recipes.js";
// import RecipePopup from "../scripts/RecipePopup.js";

import {
  eventPopupSelector,
  eventsContainer,
  eventsListSelector,
  eventsTemplateSelector,
} from "../utils/constants.js";

// import {
//   recipePopupSelector,
//   RecipesContainer,
//   recipesListSelector,
//   recipesTemplateSelector,
// } from "../utils/constants.js";

const eventData = [
  {
    name: "Pumpkin Patch",
    date: "October 18",
    src: pumpkinPatchImage,
    alt: "Fall Festival",
  },
  {
    name: "Fall Festival",
    date: "October 21",
    src: fallFestivalImage,
    alt: "Pumpkin Patch",
  },
  {
    name: "Costume Party",
    date: "October 30-31",
    src: costumeImage,
    alt: "Costumes",
  },
];

const eventPopup = new EventPopups({ popupSelector: eventPopupSelector });
eventPopup.setEventListeners();

const openPopup = (data) => {
  eventPopup.open(data);
};

const handleEventItemClick = (data) => {
  openPopup(data);
};

const createEvent = (item) => {
  const event = new Event({
    data: item,
    eventSelector: eventsTemplateSelector,
    handleEventItemClick: handleEventItemClick,
  });
  const newEvent = event.getView();
  section.addItem(newEvent);
  return newEvent;
};

const section = new Section(
  { items: eventData, renderer: createEvent },
  eventsListSelector
);

section.renderItems();

// resipes objects Elvin

// const createRecipe = (item) => {
//   const recipe = new Recipe({
//     data: item,
//     recipeSelector: recipesTemplateSelector,
//     handleRecipeItemClick: handleRecipeItemClick,
//   });
//   const newRecipe = recipe.getView();
//   section.addItem(newRecipe);
//   return newRecipe;
// };

// const resipesData = [
//   {
//     src: breadRecipesImage,
//     alt: "Bread recipe",
//     img: ingredientsBread,
//   },
//   {
//     src: pastaRecipeImage,
//     alt: "Pasta recipe",
//     img: ingredientsPasta,
//   },
// ];

// const recipeSection = new Section(
//   {
//     items: resipesData,
//     renderer: createRecipe,
//   },
//   recipesListSelector
// );

// const recipePopup = new RecipePopup({ popupSelector: recipePopupSelector });
// recipePopup.setEventListeners();

// const openPopupRecipe = (data) => {
//   recipePopup.open(data);
// };

// const handleRecipeItemClick = (data) => {
//   openPopup(data);
// };

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".my-button");
  if (button) {
    button.addEventListener("click", () => {
      console.log("Button clicked!");
    });
  }
});
