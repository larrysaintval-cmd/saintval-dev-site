const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll(".nav-links a");
const siteHeader = document.querySelector(".site-header");

/* MOBILE MENU TOGGLE */
if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", function () {
    const isActive = siteNav.classList.toggle("active");
    menuToggle.classList.toggle("active", isActive);
    menuToggle.setAttribute("aria-expanded", String(isActive));
  });
}

/* CLOSE MENU WHEN NAV LINK IS CLICKED */
navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    if (siteNav && menuToggle) {
      siteNav.classList.remove("active");
      menuToggle.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
});

/* SHRINK HEADER ON SCROLL */
window.addEventListener("scroll", function () {
  if (!siteHeader) return;

  if (window.scrollY > 40) {
    siteHeader.classList.add("scrolled");
  } else {
    siteHeader.classList.remove("scrolled");
  }
});

/* RESET MOBILE MENU IF SCREEN RESIZES TO DESKTOP */
window.addEventListener("resize", function () {
  if (window.innerWidth > 820 && siteNav && menuToggle) {
    siteNav.classList.remove("active");
    menuToggle.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});