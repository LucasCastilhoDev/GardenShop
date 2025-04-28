export default class FuncionalidadesCarrinho {
  constructor(seletorAdicionar, seletorDiminuir, seletorExcluir) {
    this.seletorAdicionar = document.querySelectorAll(seletorAdicionar);
    this.seletorDiminuir = document.querySelectorAll(seletorDiminuir);
    this.seletorExcluir = document.querySelectorAll(seletorExcluir);

    this.adicionarQuantidade = this.adicionarQuantidade.bind(this);
    this.diminuirQuantidade = this.diminuirQuantidade.bind(this);
    this.excluirQuantidade = this.excluirQuantidade.bind(this);
  }

  adicionarQuantidade(event) {
    const botaoClicado = event.currentTarget;
    const containerQuantidade = botaoClicado.closest(".produto-numero");
    const spanQuantidade = containerQuantidade.querySelector(
      '[data-carrinho="quantidade"]'
    );

    let quantidade = Number(spanQuantidade.textContent);
    quantidade += 1;
    spanQuantidade.textContent = quantidade;
  }

  diminuirQuantidade(event) {
    const botaoClicado = event.currentTarget;
    const containerQuantidade = botaoClicado.closest(".produto-numero");
    const spanQuantidade = containerQuantidade.querySelector(
      '[data-carrinho="quantidade"]'
    );

    let quantidade = Number(spanQuantidade.textContent);
    if (quantidade > 1) quantidade--;
    spanQuantidade.textContent = quantidade;
  }

  excluirQuantidade(event) {
    const botaoClicado = event.currentTarget;

    const produto = botaoClicado.closest(".produto-carrinho");

    if (produto) {
      produto.remove();
    }
  }

  ativarButtonQuantidade() {
    this.seletorAdicionar.forEach((botao) => {
      botao.addEventListener("click", this.adicionarQuantidade);
    });

    this.seletorDiminuir.forEach((botao) => {
      botao.addEventListener("click", this.diminuirQuantidade);
    });
  }

  ativarButtonExcluir() {
    this.seletorExcluir.forEach((botao) => {
      botao.addEventListener("click", this.excluirQuantidade);
    });
  }
  init() {
    this.ativarButtonQuantidade();
    this.ativarButtonExcluir();

    return this;
  }
}
