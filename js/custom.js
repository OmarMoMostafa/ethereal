//add class active to nav items
let navItems = document.querySelectorAll("nav li");

navItems.forEach((li) => {
  li.addEventListener("click", () => {
    document.querySelector("li.active").classList.remove("active");
    li.classList.add("active");
  });
});

// toggle nav in small screen
let navBtn = document.querySelector(".bars-btn");
let navUl = document.querySelector("nav ul");
navBtn.addEventListener("click", () => {
  navBtn.classList.toggle("active");
  navUl.classList.toggle("show");
});

//adjust banner height
let banner = document.querySelector(".banner");
let navBar = document.querySelector(".nav-bar");

banner.style.height =
  window.innerHeight - navBar.clientHeight + navBar.clientHeight + "px";

window.onresize = function () {
  banner.style.height =
    window.innerHeight - navBar.clientHeight + navBar.clientHeight + "px";
};
