//if (se a condição for verdadeira)

const numerico = 10;

if (numerico > 8){
    console.log("O Número informado é maior que 8");
}

const nomealuno = "Juliano";
if (nomealuno === "Juliano"){
    console.log("Olá Juliano");
}


if (nomealuno === "Maria"){
    console.log("Olá Maria");
}

//else (condiação falsa)
const logado = false;

if(logado){
    console.log("Está logado");
}  else{
    console.log("Não está logado");
}

const altura = 1.65;

if (altura > 1.70){
    console.log("Essa pessoa tem mais de 1,70m de altura");
}
else {
    console.log("Essa pessoa tem menos de 1,70m de altura");
}

//else if (verificar várias condições) achou a condição verdadeira, sai do bloco
if(1 > 2){
    console.log("Teste 1 é verdadeiro");
} else if (2 > 4){
    console.log("Teste 2 é verdadeiro");
} else if( 4 < 7){
    console.log("Teste 3 é verdadeiro");
} else {
    console.log( "Não temos condição verdadeira");
}

//switch (casos exatos)

let idade = 18;

switch (idade){
    case 18:
    console.log("O usuário é maior de idade");
    break;
    case 17:
        console.log("O usuário é menor de idade");
    break;
    default:
    console.log("Idade Inválida");
}
