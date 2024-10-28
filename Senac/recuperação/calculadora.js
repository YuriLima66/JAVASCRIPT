let display = document.getElementById('display');
let valorAtual = '';
let valorAnterior = '';
let operacao = null;

function apertarNumero(numero) {
    valorAtual += numero;
    display.value = valorAtual;
}

function definirOperacao(op) {
    operacao = op;
    valorAnterior = valorAtual;
    valorAtual = '';
}

function calcular() {
    let resultado;
    const num1 = parseFloat(valorAnterior);
    const num2 = parseFloat(valorAtual);

    switch (operacao) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            resultado = num1 / num2;
            break;
        default:
            return; 
    }

    valorAtual = resultado.toString();
    operacao = null;
    valorAnterior = '';
    display.value = valorAtual;
}

function limpar() {
    valorAtual = '';
    valorAnterior = '';
    operacao = null;
    display.value = '';
}