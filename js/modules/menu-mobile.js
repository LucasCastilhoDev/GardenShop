import outsideClick from "./outsideclick.js";

export default class MenuMobile {
  constructor(menuButton, menuList, events) {
    this.btnMobile = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    this.links = document.querySelectorAll("#menu a");

    this.activeClass = "active";

    if (events === undefined) this.events = ["touchstart", "click"];
    else this.events = events;

    this.openMenu = this.openMenu.bind(this);

    this.closeMenu = this.closeMenu.bind(this);

    this.links.forEach((link) => {
      link.addEventListener("click", this.closeMenu);
    });
  }

  openMenu(event) {
    event.preventDefault();
    this.btnMobile.classList.toggle(this.activeClass);
    this.menuList.classList.toggle(this.activeClass);

    event.currentTarget.setAttribute("aria-expanded", this.activeClass);
    if (this.activeClass) {
      event.currentTarget.setAttribute("aria-label", "Fechar Menu");
    } else {
      event.currentTarget.setAttribute("aria-label", "Abrir Menu");
    }

    console.log("ativou");

    outsideClick(this.menuList, this.events, () => {
      this.closeMenu();
    });
  }

  closeMenu() {
    this.btnMobile.classList.remove(this.activeClass);
    this.menuList.classList.remove(this.activeClass);
    this.links.forEach((link) => link.classList.remove(this.activeClass));
  }

  addMenuMobileEvents() {
    this.events.forEach((evento) =>
      this.btnMobile.addEventListener(evento, this.openMenu)
    );
  }

  init() {
    if (this.btnMobile && this.menuList) {
      this.addMenuMobileEvents();
    }
    return this;
  }
}
