const menuButton = document.querySelector('.hero__button');
const closeButton = document.querySelector('.sidebar__button');
const sidebar = document.querySelector('.sidebar');
const links = document.querySelectorAll('.sidebar__link');


links.forEach((item) => {
  item.addEventListener("click", (evt) => {
    /* evt.preventDefault() */
  })
})

menuButton.addEventListener("click", () => {
  sidebar.classList.add("sidebar_open")
})

closeButton.addEventListener("click", () => {
  sidebar.classList.remove("sidebar_open")
})

lucide.createIcons();

//SPA : Single Page Application
//fetch()