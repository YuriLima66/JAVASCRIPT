///if, uma condição
const n=10;

if(n<8){
    console.log("o numero é maior que 8")
}

const nomealuno = "juliano";
if(nomealuno== "juliano"){
    console.log("olá Juliano")    
}else{
   var outro = prompt("quem é vc?")
    if(outro=="yuri"){
        alert("bem vindo!, Yuri!")
    }
    
}

//Switch

let idade=18

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

