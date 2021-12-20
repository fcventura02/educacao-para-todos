const hamburguer = document.getElementById("hamburguer");
const menuList = document.getElementById("menu-list");
let mediaQueries = window.matchMedia("(min-width: 620px)");

hamburguer.addEventListener("click", () => {
  menuList.classList.toggle("activit");
});

mediaQueries.addEventListener("change", function(){
	if (this.matches) {
    menuList.classList.remove("activit");
  }
});
