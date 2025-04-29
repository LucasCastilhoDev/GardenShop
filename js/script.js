import MenuMobile from "./modules/menu-mobile.js";
import ScrollAnima from "./modules/scrollAnima.js";
import FuncionalidadesCarrinho from "./modules/funcionalidades-carrinho.js";
import AdicionarProduto from "./modules/adicionar-produto.js";

const menuMobile = new MenuMobile("[data-menu='button']", "[data-menu='list']");
menuMobile.init();

const scrollAnima = new ScrollAnima("[data-anime='scroll']");
scrollAnima.init();

const funcionalidadesCarrinho = new FuncionalidadesCarrinho(
  "[data-carrinho='adicionar']",
  "[data-carrinho='diminuir']",
  "[data-carrinho='remover']"
);
funcionalidadesCarrinho.init();

const adicionarProduto = new AdicionarProduto(".catalogo-botao-compra");
adicionarProduto.init();
