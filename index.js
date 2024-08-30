const icon_menu = document.querySelector(".icon_menu");
const icon_close = document.querySelector(".icon_close");
const header_menulist = document.querySelector(".header_menu-list");
const menu_items = document.querySelectorAll(".header_menu-list > li");

icon_menu.addEventListener("click", () => {
  header_menulist.style.display = "block";
  header_menulist.style.right = 0;
});
icon_close.addEventListener("click", () => {
  header_menulist.style.right = "-50%";
  header_menulist.style.display = "none";
});
menu_items.forEach((item) => {
  item.addEventListener("click", () => {
    header_menulist.style.right = "-50%";
  });
});

const portfolio_sidebarItem = document.querySelectorAll(
  ".portfolio_sidebar_list > li"
);

portfolio_sidebarItem.forEach((item) =>
  item.addEventListener("click", function (e) {
    portfolio_sidebarItem.forEach((m) => m.classList.remove("active"));
    e.target.classList.add("active");
  })
);

const dropdown_value = document.querySelector(".dropdown-value");
const dropdown_list = document.querySelector(".dropdown-list");
const dropdown_items = document.querySelectorAll(".dropdown-item");
const dropdown_select = document.querySelector(".dropdown-select");
dropdown_items.forEach((item) => {
  item.addEventListener("click", () => {
    dropdown_value.innerHTML = item.innerHTML;
    dropdown_list.style.display = "none";
  });
});
dropdown_select.addEventListener("click", () => {
  dropdown_list.style.display = "block";
});

const btnTop = document.querySelector("#topBtn");
window.onscroll = function () {
  scrollFunc();
  closeMenuFunc();
};
function scrollFunc() {
  if (document.body.scrollTop > 1000) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
}
function closeMenuFunc() {
  if (document.body.scrollTop > 250 && screen.width <= 500) {
    header_menulist.style.right = "-50%";
    header_menulist.style.display = "none";
  }
}

btnTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
