document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  initMenuToggle();
  initMenuLinks();
  initFaqToggle();
  initPricingToggle();
});

function initThemeToggle() {
  const themeToggleBtns = document.querySelectorAll(
    '[data-role="theme-toggle"]',
  );
  const htmlEl = document.documentElement;

  themeToggleBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      htmlEl.classList.toggle("dark");
      htmlEl.classList.toggle("light");
    });
  });
}

function initMenuToggle() {
  const menuButton = document.getElementById("menuButton");
  const mobileMenu = document.getElementById("mobileMenu");
  const menuSvg = document.querySelector(".lucide-menu");
  const crossSvg = document.querySelector(".lucide-x");

  menuButton.addEventListener("click", () => {
    const isHidden = mobileMenu.classList.toggle("hidden");

    // Toggle icons based on menu state
    menuSvg.classList.toggle("hidden", !isHidden);
    crossSvg.classList.toggle("hidden", isHidden);
  });
}

function initMenuLinks() {
  const mobileMenu = document.getElementById("mobileMenu");
  const menuSvg = document.querySelector(".lucide-menu");
  const crossSvg = document.querySelector(".lucide-x");
  const menuLinks = mobileMenu.querySelectorAll("a");

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      // Close the menu
      mobileMenu.classList.add("hidden");

      // Reset icons → hamburger visible, cross hidden
      menuSvg.classList.remove("hidden");
      crossSvg.classList.add("hidden");
    });
  });
}

function initPricingToggle() {
  const monthlyBtn = document.getElementById("radix-«r0»-trigger-monthly");
  const annuallyBtn = document.getElementById("radix-«r0»-trigger-annually");
  const monthlyPanel = document.getElementById("radix-«r0»-content-monthly");
  const annuallyPanel = document.getElementById("radix-«r0»-content-annually");

  // Helper to switch panels
  const activatePanel = (
    activeBtn,
    activePanel,
    inactiveBtn,
    inactivePanel,
  ) => {
    activePanel.classList.remove("hidden");
    inactivePanel.classList.add("hidden");

    activeBtn.setAttribute("aria-selected", "true");
    activeBtn.setAttribute("data-state", "active");

    inactiveBtn.setAttribute("aria-selected", "false");
    inactiveBtn.setAttribute("data-state", "inactive");
  };

  // Default: Monthly active
  activatePanel(monthlyBtn, monthlyPanel, annuallyBtn, annuallyPanel);

  // Event listeners
  monthlyBtn.addEventListener("click", () =>
    activatePanel(monthlyBtn, monthlyPanel, annuallyBtn, annuallyPanel),
  );

  annuallyBtn.addEventListener("click", () =>
    activatePanel(annuallyBtn, annuallyPanel, monthlyBtn, monthlyPanel),
  );
}

function initFaqToggle() {
  const triggers = document.querySelectorAll("[data-slot='accordion-trigger']");

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const item = trigger.closest("[data-slot='accordion-item']");
      const header = item.querySelector("h3");
      const contentId = trigger.getAttribute("aria-controls");
      const content = document.getElementById(contentId);
      const svg = trigger.querySelector("svg");
      const isOpen = trigger.getAttribute("data-state") === "open";

      // Close all items first
      closeAllItems();

      // Open the clicked one if it was closed
      if (!isOpen) {
        openItem(item, header, trigger, content, svg);
      }
    });
  });
}

// Helper: Close all accordion items
function closeAllItems() {
  document.querySelectorAll("[data-slot='accordion-item']").forEach((item) => {
    const btn = item.querySelector("[data-slot='accordion-trigger']");
    const header = item.querySelector("h3");
    const contentId = btn.getAttribute("aria-controls");
    const content = document.getElementById(contentId);
    const icon = btn.querySelector("svg");

    item.setAttribute("data-state", "closed");
    header.setAttribute("data-state", "closed");
    btn.setAttribute("data-state", "closed");
    btn.setAttribute("aria-expanded", "false");
    content.setAttribute("data-state", "closed");

    // Smooth collapse
    content.style.maxHeight = "0px";
    content.style.overflow = "hidden";
    content.hidden = true;

    icon.classList.remove("rotate-180");
  });
}

// Helper: Open a specific accordion item
function openItem(item, header, trigger, content, svg) {
  item.setAttribute("data-state", "open");
  header.setAttribute("data-state", "open");
  trigger.setAttribute("data-state", "open");
  trigger.setAttribute("aria-expanded", "true");
  content.setAttribute("data-state", "open");
  content.hidden = false;

  // Smooth expand
  content.style.overflow = "hidden";
  content.style.maxHeight = content.scrollHeight + "px";

  svg.classList.add("rotate-180");
}
