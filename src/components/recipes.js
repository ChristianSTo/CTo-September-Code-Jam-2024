import {
  recipeContainer,
  breadDescription,
  pastaDescription,
  recipeImages,
} from "../utils/constants.js";

export function initializeRecipesPopup() {
  document.addEventListener("DOMContentLoaded", function () {
    recipeImages.forEach((image) => {
      image.addEventListener("click", function () {
        const target = this.getAttribute("name");

        // Show the container
        recipeContainer.style.display = "block";

        // Hide both descriptions initially
        breadDescription.classList.remove("active");
        pastaDescription.classList.remove("active");

        // Show the corresponding description
        if (target === "bread") {
          breadDescription.classList.add("active");
        } else if (target === "pasta") {
          pastaDescription.classList.add("active");
        }
      });
    });
  });
}
