var conexao = require("./conexaobanco");

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const methodOverride = require('method-override');

app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('cadastro');
});

app.get('/listadecliente', (req, res) => {
    const sql = "SELECT * FROM clientes";
    conexao.query(sql, (error, result) => {
        if (error) {
            console.error("Erro ao buscar clientes:", error);
            res.status(500).send('Erro ao buscar clientes');
        } else {
            res.render('listadecliente', { clientes: result });
        }
    });
});

app.post('/', (req, res) => {
    const { nome, sobrenome, email, whatsapp, cep, logradouro, numero, complemento, bairro, cidade, uf } = req.body;

    const sql = "INSERT INTO clientes (nome, sobrenome, email, whatsapp, cep, logradouro, numero, complemento, bairro, cidade, uf) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

    conexao.query(sql, [nome, sobrenome, email, whatsapp, cep, logradouro, numero, complemento, bairro, cidade, uf], (error, result) => {
        if (error) {
            if (error.code === 'ER_DUP_ENTRY') {
                res.render('cadastro', { error: 'Email já cadastrado. Por favor, utilize outro email.', nome, sobrenome, email, whatsapp, cep, logradouro, numero, complemento, bairro, cidade, uf });
            } else {
                console.error("Erro ao inserir cliente:", error);
                res.status(500).send("Erro ao inserir cliente");
            }
        } else {
            res.redirect('/listadecliente');
        }
    });
});

app.delete('/delete/:codcliente', (req, res) => {
    const { codcliente } = req.params;
    console.log(`Tentando excluir usuário com ID: ${codcliente}`);

    conexao.query('DELETE FROM clientes WHERE codcliente = ?', [codcliente], (err, result) => {
        if (err) {
            console.error('Erro ao excluir usuário:', err);
            return res.status(500).json({ error: 'Erro ao excluir usuário', details: err.sqlMessage });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        res.redirect('/listadecliente');
    });
});

app.get('/update-clientes', (req, res) => {
    const sql = "SELECT * FROM clientes WHERE codcliente = ?";
    const codcliente = req.query.codcliente;

    conexao.query(sql, [codcliente], (error, result) => {
        if (error) {
            console.error("Erro ao buscar cliente:", error);
            return res.status(500).send('Erro ao buscar cliente');
        }

        if (result && result.length > 0) {
            res.render("alterarclientes", { clientes: result[0] });
        } else {
            res.status(404).send('Cliente não encontrado');
        }
    });
});

app.post('/update-clientes', (req, res) => {
    const { nome, sobrenome, email, whatsapp, cep, logradouro, numero, complemento, bairro, cidade, uf, codcliente } = req.body;

    const sql = "UPDATE clientes SET nome = ?, sobrenome = ?, email = ?, whatsapp = ?, cep = ?, logradouro = ?, numero = ?, complemento = ?, bairro = ?, cidade = ?, uf = ? WHERE codcliente = ?";

    conexao.query(sql, [nome, sobrenome, email, whatsapp, cep, logradouro, numero, complemento, bairro, cidade, uf, codcliente], (error, result) => {
        if (error) {
            console.error("Erro ao atualizar cliente:", error);
            res.status(500).send("Erro ao atualizar cliente");
        } else {
            if (result.affectedRows > 0) {
                res.redirect('/listadecliente');
            } else {
                console.warn("Nenhum cliente atualizado.");
                res.status(404).send("Cliente não encontrado");
            }
        }
    });
});

app.listen(3000, () => {
    console.log("Conectado na porta 3000");
});