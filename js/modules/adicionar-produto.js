import fetchProdutos from "./apiProdutos.js";

export default class AdicionarProduto {
  constructor(btnCarrinho) {
    this.btnCarrinho = document.querySelectorAll(btnCarrinho);

    this.produtoId = this.produtoId.bind(this);
  }

  async produtoId(event) {
    event.preventDefault();
    const btnSelecionado = event.currentTarget;
    const produtoId = Number(btnSelecionado.dataset.produtoId);

    try {
      const produtos = await fetchProdutos();
      const produtoSelecionado = produtos.find((p) => p.id === produtoId);

      if (produtoSelecionado) {
        const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
        carrinho.push(produtoSelecionado);
        localStorage.setItem("carrinho", JSON.stringify(carrinho));
        window.location.href = "./pages/carrinho.html";
      } else {
        console.warn("Produto não encontrado!");
      }
    } catch (error) {
      console.error("Produto não encontrado!");
    }

    console.log("ID Produto", produtoId);
  }

  enviarParaCarrinho() {
    this.btnCarrinho.forEach((botao) => {
      botao.addEventListener("click", this.produtoId);
    });
  }

  init() {
    if (this.btnCarrinho.length) {
      this.enviarParaCarrinho();
    }
    return this;
  }
}
