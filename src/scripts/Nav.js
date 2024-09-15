const hamBtn = document.querySelector(".hamburger");
const nav = document.querySelector(".nav__links");

hamBtn.addEventListener("click", () => {
  hamBtn.classList.toggle("active");
  nav.classList.toggle("active");
});
