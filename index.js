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
dropdown_items.forEach((item) => {
  item.addEventListener("click", () => {
    dropdown_value.innerHTML = item.innerHTML;
  });
});
