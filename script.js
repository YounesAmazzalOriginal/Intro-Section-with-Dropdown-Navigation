function openMobileLink(target) {
  let iconLink = target.querySelector("i");
  iconLink.classList.toggle("active-icon");

  let menu = target.nextElementSibling;
  let menuLink = menu.querySelector(".menu-link");
  let linkHeight = parseFloat(window.getComputedStyle(menuLink).height);

  let isOpen = menu.getAttribute("data-open") === "true";

  menu.setAttribute("data-open", !isOpen);
  target.style.color = !isOpen ? "var(--Almost-Black)" : "var(--Medium-Gray)";
  menu.style.padding = !isOpen ? "20px 10px" : "0px";
  menu.style.height = !isOpen ? `${linkHeight * 7.5}px` : "0px";
}

function closeMobileNav() {
  var nav = document.querySelector("nav");
  nav.style.transform = "translateX(100%)";
  nav.style.boxShadow = "";
}
function openMobileNav() {
  var nav = document.querySelector("nav");
  nav.style.transform = "translateX(0%)";
  nav.style.boxShadow = "0 0 1000px var(--Medium-Gray)";
}
