const http = require('http');
const fs = require('fs');
 
const server = http.createServer((req, res) => {
console.log(req.url, req.method);
 
res.setHeader('Tipo-Conteudo', 'texto/html');

let caminho= './views/';

switch (req.url) {
    case '/':
        caminho +='index.html';
        res.statusCode=200;
        
        break;
    case '/sobre':
        caminho +='sobre.html';
        res.statusCode=200;
        
        break;
    case '/nossahistoria':
        
        res.statusCode=301;
        res.setHeader('Location','/sobre')
        
        break;

    default:
        caminho += '404.html';
        res.statusCode=404;
        break;
}

fs.readFile(caminho, (err, data) =>{
    if(err){
        console.log(err);
        res.end();
    } else{
        res.write(data);
        res.end();
    }
});


//definindo o tipo de coonteúdo do cabeçalho
//res.setHeader('Tipo-Conteudo', 'texto/simples');
 
//escrevendo a resposta
//res.write('<head><link rel="stylesheet" href="#"></head>');
//res.write('<p>Olá Pessoal</p>');
//res.end();
 
});


server.listen(3000, 'localhost', () => {
    console.log("Ouvindo requisição na porta 3000");
    });
 
