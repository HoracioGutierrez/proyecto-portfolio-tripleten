const menuButton = document.querySelector('.hero__button');
const closeButton = document.querySelector('.sidebar__button');
const sidebar = document.querySelector('.sidebar');

menuButton.addEventListener("click", () => {
  sidebar.classList.add("sidebar_open")
})

closeButton.addEventListener("click", () => {
  sidebar.classList.remove("sidebar_open")
})