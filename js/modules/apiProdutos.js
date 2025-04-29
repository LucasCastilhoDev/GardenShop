export default async function fetchProdutos() {
  try {
    const response = await fetch("../data/produtosapi.json");
    if (!response.ok) throw new console.error("Falha na rede");
    const data = await response.json();
    return data.produtos;
  } catch (erro) {
    console.error("Erro ao buscar produtos.", erro);
    return [];
  }
}
