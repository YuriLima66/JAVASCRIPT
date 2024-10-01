//object literals
const objetoPessoa = {
nome: "João",
idade: 30,
};

console.log(objetoPessoa.nome);
console.log(objetoPessoa);
console.log(typeof objetoPessoa);

//removendo uma propriedade do objeto
const pessoa = {
    nome:"Morgana",
    idade: 40,
};

console.log(pessoa);
delete pessoa.idade;
console.log(pessoa);

//adicionando propriedade ao objeto
const funcionario = {
    nome:"Luis",
    matricula: 34567,
};

console.log(funcionario);
//adicionando
funcionario.sobrenome = "Santana";
console.log(funcionario);

//método assign
const objeto1 = {
nome: "Juliano",
idade: 30,
};

const objeto2 = {
altura: 1.80,
genero: "masculino",
}

const objetoDestino = {};

Object.assign(objetoDestino, objeto1, objeto2);
console.log(objetoDestino);

//método keys
const objeto = {
    nome:"Fernanda",
    idade: 29,
};

const chaves = Object.keys(objeto);
console.log(chaves);

//Exibindo os valores do array
const valores = Object.values(objeto);
console.log(valores);

//mutação - atribuição
const hospede = {
    nome: "Alberto"
};

hospede.nome = "Júnior";
console.log(hospede.nome);

//mutação - inserção
hospede.sobrenome = "Lima";
console.log(hospede);

//mutação - operador de adição
const hospedeNovo = {
    nome:"Meiriane",
    idade: 29,
};

hospedeNovo.idade += 2;
console.log(hospedeNovo.idade);

//mutação - deletar
delete hospedeNovo.nome;
console.log(hospedeNovo);