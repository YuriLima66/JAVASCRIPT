function comprar(){
    let tipo = document.getElementById('tipo-ingresso');
   // quando precisamos do valor entre as aspas dentro do id, podemos usar o .value, porem se precisamos converter esse valor pra um
   //numero inteiro, usarmos o parseInt, agora o valor que anteriormente era um texto vai se tornar um numero inteiro.
   //como foi feito na linha abaixo   
    let qtd = parseInt(document.getElementById('qtd').value);

   if (tipo.value == 'pista') {
    comprarPista(qtd);
    
   } else if (tipo.value == 'superior') {
    comprarSuperior(qtd);

   } else {
    comprarInferior(qtd);
   }
}
 
function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById ('qtd-pista').textContent);
    if (qtd > qtdPista) { 
        alert('Quantidade indisponivel para pista, tente outro setor')
    } else{
        qtdPista = qtdPista - qtd;
        document.getElementById ('qtd-pista').textContent = qtdPista;
         alert('Compra realizada com sucesso!');
         
    }
 }


 function comprarSuperior(qtd) {
    let qtdSuperior = parseInt(document.getElementById ('qtd-superior').textContent);
    if (qtd > qtdSuperior) { 
        alert('Quantidade indisponivel para o piso superior, tente outro setor')
    } else{
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById ('qtd-superior').textContent = qtdSuperior;
         alert('Compra realizada com sucesso!');
         
    }
 }


 function comprarInferior(qtd) {
    let qtdInferior = parseInt(document.getElementById ('qtd-inferior').textContent);
    if (qtd > qtdInferior) { 
        alert('Quantidade indisponivel para o piso inferior, tente outro setor')
    } else{
        qtdInferior = qtdInferior - qtd;
        document.getElementById ('qtd-inferior').textContent = qtdInferior;
         alert('Compra realizada com sucesso!');
         
    }
 }



