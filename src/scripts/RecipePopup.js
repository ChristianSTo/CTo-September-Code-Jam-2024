import Popup from "./Popup.js";

class RecipePopup extends Popup {
  constructor({ popupSelector }) {
    super(popupSelector);
    this.recipePopup = document.querySelector(popupSelector);
    this.recipeImage = document.querySelector(".recipe-popup_image");
  }

  open = (data) => {
    this.recipeImage.src = data.src;
    super.open();
  };

  setEventListeners() {
    super.setEventListeners();
  }
}

export default RecipePopup;
