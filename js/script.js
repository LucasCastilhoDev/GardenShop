import MenuMobile from "./modules/menu-mobile.js";
import ScrollAnima from "./modules/scrollAnima.js";

const menuMobile = new MenuMobile("[data-menu='button']", "[data-menu='list']");
menuMobile.init();

const scrollAnima = new ScrollAnima("[data-anime='scroll']");
scrollAnima.init();
