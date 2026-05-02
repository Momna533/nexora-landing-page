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

document.addEventListener("DOMContentLoaded", () => {
  const monthlyBtn = document.getElementById("radix-«r0»-trigger-monthly");
  const annuallyBtn = document.getElementById("radix-«r0»-trigger-annually");

  const monthlyPanel = document.getElementById("radix-«r0»-content-monthly");
  const annuallyPanel = document.getElementById("radix-«r0»-content-annually");

  // Default: Monthly active
  monthlyPanel.classList.remove("hidden");
  annuallyPanel.classList.add("hidden");
  monthlyBtn.setAttribute("aria-selected", "true");
  monthlyBtn.setAttribute("data-state", "active");
  annuallyBtn.setAttribute("aria-selected", "false");
  annuallyBtn.setAttribute("data-state", "inactive");

  monthlyBtn.addEventListener("click", () => {
    // Show monthly, hide annually
    monthlyPanel.classList.remove("hidden");
    annuallyPanel.classList.add("hidden");

    // Update attributes
    monthlyBtn.setAttribute("aria-selected", "true");
    monthlyBtn.setAttribute("data-state", "active");
    annuallyBtn.setAttribute("aria-selected", "false");
    annuallyBtn.setAttribute("data-state", "inactive");
  });

  annuallyBtn.addEventListener("click", () => {
    // Show annually, hide monthly
    annuallyPanel.classList.remove("hidden");
    monthlyPanel.classList.add("hidden");

    // Update attributes
    annuallyBtn.setAttribute("aria-selected", "true");
    annuallyBtn.setAttribute("data-state", "active");
    monthlyBtn.setAttribute("aria-selected", "false");
    monthlyBtn.setAttribute("data-state", "inactive");
  });
});
