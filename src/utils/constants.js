// put all of your constant variables here

const eventPopupSelector = ".event-popup";
const eventsContainer = document.querySelector(".events__container");
const eventsListSelector = ".events__list";
const eventsTemplateSelector = "#events-template";

const eventPopupName = document.querySelector(".event-popup__name");
const eventPopupDate = document.querySelector(".event-popup__date");

// export them by adding them to the list
export {
  eventPopupSelector,
  eventsContainer,
  eventsListSelector,
  eventPopupName,
  eventPopupDate,
  eventsTemplateSelector,
};
// pu all of your constant variables here
export const recipeContainer = document.querySelector(
  ".popupRecipes__container"
);
export const breadDescription = document.querySelector(
  ".popup__description-bread"
);
export const pastaDescription = document.querySelector(
  ".popup__description-pasta"
);
export const recipeImages = document.querySelectorAll(".recipe-image");
