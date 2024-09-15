// import {
//   recipeContainer,
//   breadDescription,
//   pastaDescription,
//   recipeImages,
// } from "../utils/constants.js";

// export function initializeRecipesPopup() {
//   document.addEventListener("DOMContentLoaded", function () {
//     recipeImages.forEach((image) => {
//       image.addEventListener("click", function () {
//         const target = this.getAttribute("name");

//         // Show the container
//         recipeContainer.style.display = "block";

//         // Hide both descriptions initially
//         breadDescription.classList.remove("active");
//         pastaDescription.classList.remove("active");

//         // Show the corresponding description
//         if (target === "bread") {
//           breadDescription.classList.add("active");
//         } else if (target === "pasta") {
//           pastaDescription.classList.add("active");
//         }
//       });
//     });
//   });
// }

class Recipe {
  constructor({ data, recipeSelector, handleRecipetItemClick }) {
    this.link = data.src;
    this.alt = data.alt;
    this._recipeSelector = recipeSelector;
    this._handleRecipeItemClick = handleRecipeItemClick;
  }

  //clone the template element with all its content
  _getTemplate() {
    return document
      .querySelector(this._recipeSelector)
      .content.querySelector(".recipes__list-item")
      .cloneNode(true);
  }

  _setEventListeners() {
    this._element.addEventListener("click", () => {
      this._handleRecipeItemClick({
        src: this.link,
      });
    });
  }
  getView() {
    this._element = this._getTemplate();
    //find the children of the element
    this._image = this._element.querySelector(".recipe__image");
    //set the values
    this._image.src = this.src;
    this._image.alt = this.alt;

    this._setEventListeners();
    return this._element;
  }
}

export default Recipe;
