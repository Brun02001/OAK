// Cria um array vazio para armazenar os produtos
let produtos = [];

// Define uma função para adicionar um produto
function adicionarProduto() {
  // Pede ao usuário para inserir as informações do produto
  let nome = prompt("Insira o nome do produto:");
  let preco = parseFloat(prompt("Insira o preço do produto:"));
  let descricao = prompt("Insira uma descrição do produto:");
  let quantidade = parserFloat(prompt("Insira a quantidade dele"))

  // Cria um objeto para representar o produto
  let produto = {
    nome: nome,
    preco: preco,
    descricao: descricao,
    quantidade : quantidade
  };

  // Adiciona o produto ao array de produtos
  produtos.push(produto);

  // Mostra uma mensagem de confirmação
  alert("Produto adicionado com sucesso!");
}

// Define uma função para exibir todos os produtos
function exibirProdutos() {
  // Cria uma string vazia para armazenar a lista de produtos
  let listaProdutos = "";

  // Itera sobre o array de produtos e adiciona cada um à lista
  for (let i = 0; i < produtos.length; i++) {
    let produto = produtos[i];
    listaProdutos += `Nome: ${produto.nome}\nPreço: R$${produto.preco}\nDescrição: ${produto.descricao}\n\n`;
  }

  // Mostra a lista de produtos em uma caixa de diálogo
  alert(listaProdutos);
}
function disponivel(){
    if( quantidade >= 1){
        alert("Produto disponivel");
    }
    else{
        alert("Produto indisponivel")
    }

}
// Chama a função para adicionar um produto quando o botão "Adicionar produto" é clicado
document.getElementById("botaoAdicionar").addEventListener("click", adicionarProduto);

// Chama a função para exibir todos os produtos quando o botão "Exibir produtos" é clicado
document.getElementById("botaoExibir").addEventListener("click", exibirProdutos);
