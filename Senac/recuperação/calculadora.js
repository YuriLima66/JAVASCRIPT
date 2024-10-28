// 1. Seleciona o elemento HTML com o id "display" e o armazena na variável display.
let display = document.getElementById('display'); 

// 2. Inicializa a variável valorAtual como uma string vazia.
let valorAtual = ''; 

// 3. Inicializa a variável valorAnterior como uma string vazia.
let valorAnterior = '';

// 4. Inicializa a variável operacao como null.
let operacao = null;

// 5. Define a função apertarNumero que é chamada quando um número é pressionado.
function apertarNumero(numero) {
    // 6. Concatena o número pressionado ao valorAtual.
    valorAtual += numero; 
    // 7. Atualiza o valor do display com o valorAtual.
    display.value = valorAtual;
}

// 8. Define a função definirOperacao que é chamada quando um operador é pressionado.
function definirOperacao(op) {
    // 9. Atribui o operador à variável operacao.
    operacao = op;
    // 10. Copia o valorAtual para a variável valorAnterior.
    valorAnterior = valorAtual; 
    // 11. Limpa a variável valorAtual.
    valorAtual = '';
}

// 12. Define a função calcular que é chamada quando o botão "igual" é pressionado.
function calcular() {
    // 13. Inicializa a variável resultado.
    let resultado;
    // 14. Converte os valores de valorAnterior e valorAtual para números de ponto flutuante.
    const num1 = parseFloat(valorAnterior);
    const num2 = parseFloat(valorAtual);

    // 15. Utiliza um switch para realizar a operação de acordo com o valor de operacao.
    switch (operacao) {
        case '+':
            // 16. Soma os dois números e atribui o resultado à variável resultado.
            resultado = num1 + num2; 
            break;
        case '-':
            // 17. Subtrai os dois números e atribui o resultado à variável resultado.
            resultado = num1 - num2; 
            break;
        case '*':
            // 18. Multiplica os dois números e atribui o resultado à variável resultado.
            resultado = num1 * num2;
            break;
        case '/':
            // 19. Divide os dois números e atribui o resultado à variável resultado.
            resultado = num1 / num2;
            break;
        default:
            // 20. Retorna sem fazer nada se o operador não for válido.
            return; 
    }

    // 21. Converte o resultado para uma string e atribui à variável valorAtual.
    valorAtual = resultado.toString(); 
    // 22. Limpa a variável operacao.
    operacao = null; 
    // 23. Limpa a variável valorAnterior.
    valorAnterior = '';
    // 24. Atualiza o valor do display com o valorAtual.
    display.value = valorAtual;
}

// 25. Define a função limpar que é chamada quando o botão "C" é pressionado.
function limpar() {
    // 26. Limpa as variáveis valorAtual, valorAnterior e operacao.
    valorAtual = '';
    valorAnterior = '';
    operacao = null;
    // 27. Limpa o valor do display.
    display.value = '';
}