const http = require('http');
const fs = require('fs');
 
const server = http.createServer((req, res) => {
console.log(req.url, req.method);
 
res.setHeader('Tipo-Conteudo', 'texto/html');

fs.readFile('./views/index.html', (err, data) =>{
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
 
