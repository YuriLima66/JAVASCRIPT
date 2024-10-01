/*
//importando dados e outro arquivo 
const executePessoas= require('./pessoas')

//executando valor atribuido a variavel executePessoas, com importação

console.log(executePessoas.pessoas, executePessoas.idade);

*/
//desestruturação 

const{pessoas,idade}= require('./pessoas');
console.log(pessoas, idade);
