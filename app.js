const themeToggle = document.querySelectorAll('[data-role="theme-toggle"]');
const htmlEl = document.documentElement;

themeToggle.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("df");
    if (htmlEl.classList.contains("dark")) {
      htmlEl.classList.remove("dark");
      htmlEl.classList.add("light");
    } else {
      htmlEl.classList.remove("light");
      htmlEl.classList.add("dark");
    }
  });
});

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

const menuSvg = document.querySelector(".lucide-menu");
const crossSvg = document.querySelector(".lucide-x");
menuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");

  if (mobileMenu.classList.contains("hidden")) {
    // menu is closed → show hamburger
    menuSvg.classList.remove("hidden");
    crossSvg.classList.add("hidden");
  } else {
    // menu is open → show cross
    menuSvg.classList.add("hidden");
    crossSvg.classList.remove("hidden");
  }
});
