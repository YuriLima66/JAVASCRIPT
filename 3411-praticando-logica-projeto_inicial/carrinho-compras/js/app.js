//foi preciso criar uma variavel fora da função pra começar a contar dentro da função somando com o preço nesse exercicio
let totalGeral = 1;
limpar();

function adicionar(tag) {
   //recuperar valor nome do produto, quantidade e valor 
    let produto = document.getElementById('produto').value;
    // o proximo codigo separa o que esta como texto no html, você precisa colocor um ponto de referencia como base como 
    //por exemplo abaixo '-' e a partir desse elemento vai virar uma array, aí voce seleciona a parte desejada, como no 
    //caso abaixo, vai ser o valor [0]
    let nomeProduto = produto.split('-')[0];
    // mesma coisa nesse só que desse vez precisaremos do elemento [1] do array.
    let valorUnitario = produto.split('R$')[1];
    //o valor getElementById faz o link com o elemento que tenha o id indicado por você dentro dos parenteses() 
    //como nesse exemplo foi o 'quantidade'
    let quantidade = document.getElementById('quantidade').value;
       
    //calcular o preço, o nosso subtotal
   //agora podemos calcular o preço usando a seguinte variavel abaixo 
    //não esquecer do .value que vai nos dar o valor dado, um pouco parecido com um parseInt. 
    let preco = quantidade * valorUnitario;
    
    //adicionar ao carrinho 
    let carrinho = document.getElementById('lista-produtos');
    // na linha de baixo realizamos uma concatenação com o texto selecionado com o 'innerHtml'
    
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
  </section>`;
   
  //atualizar o valor total

  totalGeral= totalGeral+ preco;
  //selecionei a parte do hatml que vai ser mudada com a tag getElementById
  let campoTotal = document.getElementById('valor-total');
  //na linha de baixo vamos usar o .textContent pois o elemento usado vai ser um paragrafo
  campoTotal.textContent= `R$ ${totalGeral}`;

  //colocar uma quantidade fixa, foi preciso pegar a linha toda pq tem um .value, 
  //pelo que e entendi não funciona se eu colocar somente a var quantidade.

  quantidade = document.getElementById('quantidade').value = 1;
      
}

function limpar() {
   
   totalGeral= 0;
   //declaramos que o html de exemplo deve ficar vazio
   document.getElementById('lista-produtos').innerHTML = '';
   //o mesmo vai ser feito n linha abaixo, a unica diferença é que o que eu quero mudar no de baixo é o texto,
   // então devemos usar o .text content
   document.getElementById('valor-total').textContent = 'R$ 0';
    
}