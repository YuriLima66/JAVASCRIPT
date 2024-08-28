<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercícios JavaScript</title>
    <style>
        body {
            font-family: sans-serif;
            margin: 20px;
        }
        h1, h2, h3 {
            color: #333;
        }
        pre {
            background-color: #f0f0f0;
            padding: 10px;
            border-radius: 5px;
        }
        button {
            padding: 8px 16px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
    </style>
</head>
<body>

    <h1>Exercícios JavaScript</h1>

    <h2>1. Nome Completo e Preferência por Programar</h2>
    <button onclick="executarExercicio1()">Executar</button>
    <pre id="resultado1"></pre>

    <h2>2. Operações Matemáticas</h2>
    <button onclick="executarExercicio2()">Executar</button>
    <pre id="resultado2"></pre>

    <h2>3. Poema com Interpolação</h2>
    <button onclick="executarExercicio3()">Executar</button>
    <pre id="resultado3"></pre>

    <h2>4. Data Atual Formatada</h2>
    <button onclick="executarExercicio4()">Executar</button>
    <pre id="resultado4"></pre>

    <h2>5. Área do Retângulo</h2>
    <button onclick="executarExercicio5()">Executar</button>
    <pre id="resultado5"></pre>

    <h2>6. Verificar Vogal</h2>
    <button onclick="executarExercicio6()">Executar</button>
    <pre id="resultado6"></pre>

    <h2>7. Verificar Par ou Ímpar</h2>
    <button onclick="executarExercicio7()">Executar</button>
    <pre id="resultado7"></pre>

    <h2>8. Classificar Triângulos</h2>
    <button onclick="executarExercicio8()">Executar</button>
    <pre id="resultado8"></pre>

    <h2>9. Média do Aluno</h2>
    <button onclick="executarExercicio9()">Executar</button>
    <pre id="resultado9"></pre>

    <h2>10. Array de Hobbies</h2>
    <button onclick="executarExercicio10()">Executar</button>
    <pre id="resultado10"></pre>

    <h2>11. Array de Frutas</h2>
    <button onclick="executarExercicio11()">Executar</button>
    <pre id="resultado11"></pre>

    <h2>12. Tipo de Variável</h2>
    <button onclick="executarExercicio12()">Executar</button>
    <pre id="resultado12"></pre>

    <h2>13. Calculadora Simples</h2>
    <button onclick="executarExercicio13()">Executar</button>
    <pre id="resultado13"></pre>

    <script>
        function executarExercicio1() {
            const nomeCompleto = prompt("Digite seu nome completo");
            const gostaDeProgramar = confirm("Você gosta de programar?");
            document.getElementById("resultado1").textContent = `${nomeCompleto}, bem vindo(a) ao nosso exercício.\nVocê gosta de programar? ${gostaDeProgramar}`;
        }

        function executarExercicio2() {
            // 2 + (3 x 4) - 5
            const num1 = 2;
            const num2 = 3;
            const num3 = 4;
            const num4 = 5;
            const resultado1 = num1 + (num2 * num3) - num4;

            // 2 x (3 + 4) - 5 ÷ 5
            const num5 = 2;
            const num6 = 3;
            const num7 = 4;
            const num8 = 5;
            const resultado2 = num5 * (num6 + num7) - num8 / num8;

            // {[(10 - 4) / 2] * 3} + 1
            const num9 = 10;
            const num10 = 4;
            const num11 = 2;
            const num12 = 3;
            const num13 = 1;
            const resultado3 = ((num9 - num10) / num11) * num12 + num13;

            // 3 * 4 / 2 + 1 - 5
            const num14 = 3;
            const num15 = 4;
            const num16 = 2;
            const num17 = 1;
            const num18 = 5;
            const resultado4 = num14 * num15 / num16 + num17 - num18;

            document.getElementById("resultado2").textContent = `Resultado 1: ${resultado1}\nResultado 2: ${resultado2}\nResultado 3: ${resultado3}\nResultado 4: ${resultado4}`;
        }

        function executarExercicio3() {
            const nome = "João";
            const cidade = "Rio de Janeiro";
            const poema = `Olá, ${nome}, da cidade do ${cidade},\nO sol te aquece, a brisa te leva,\nEm versos que cantam, a vida se alegra.`;
            document.getElementById("resultado3").textContent = poema;
        }

        function executarExercicio4() {
            const dataAtual = new Date();
            const dia = dataAtual.getDate();
            const mes = dataAtual.getMonth() + 1;
            const ano = dataAtual.getFullYear();
            const dataFormatada = `A data de hoje é: ${dia}/${mes}/${ano}`;
            document.getElementById("resultado4").textContent = dataFormatada;
        }

        function executarExercicio5() {
            const base = parseFloat(prompt("Digite a base do retângulo:"));
            const altura = parseFloat(prompt("Digite a altura do retângulo:"));
            const area = base * altura;
            document.getElementById("resultado5").textContent = `A área do retângulo é: ${area}`;
        }

        function executarExercicio6() {
            const caractere = prompt("Digite um caractere:").toLowerCase();
            if (caractere === 'a' || caractere === 'e' || caractere === 'i' || caractere === 'o' || caractere === 'u') {
                document.getElementById("resultado6").textContent = "O caractere é uma vogal.";
            } else {
                document.getElementById("resultado6").textContent = "O caractere não é uma vogal.";
            }
        }

        function executarExercicio7() {
            const numero = parseInt(prompt("Digite um número:"));
            if (numero % 2 === 0) {
                document.getElementById("resultado7").textContent = "O número é par.";
            } else {
                document.getElementById("resultado7").textContent = "O número é ímpar.";
            }
        }

        function executarExercicio8() {
            const lado1 = parseFloat(prompt("Digite o lado 1 do triângulo:"));
            const lado2 = parseFloat(prompt("Digite o lado 2 do triângulo:"));
            const lado3 = parseFloat(prompt("Digite o lado 3 do triângulo:"));
            if (lado1 === lado2 && lado2 === lado3) {
                document.getElementById("resultado8").textContent = "O triângulo é equilátero.";
            } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
                document.getElementById("resultado8").textContent = "O triângulo é isósceles.";
            } else {
                document.getElementById("resultado8").textContent = "O triângulo é escaleno.";
            }
        }

        function executarExercicio9() {
            const nota1 = parseFloat(prompt("Digite a primeira nota:"));
            const nota2 = parseFloat(prompt("Digite a segunda nota:"));
            const nota3 = parseFloat(prompt("Digite a terceira nota:"));
            const media = (nota1 + nota2 + nota3) / 3;
            if (media >= 7) {
                document.getElementById("resultado9").textContent = `O aluno foi aprovado com média: ${media}`;
            } else {
                document.getElementById("resultado9").textContent = `O aluno foi reprovado com média: ${media}`;
            }
        }

        function executarExercicio10() {
            const hobbies = ["Jogar video game", "Ler", "Caminhar", "Assistir filmes", "Cozinhar"];
            document.getElementById("resultado10").textContent = `Meus hobbies: ${hobbies}`;
        }

        function executarExercicio11() {
            const frutas = ["Maçã", "Banana", "Uva", "Pera", "Laranja"];
            document.getElementById("resultado11").textContent = `Segundo elemento: ${frutas[1]}\nArray de frutas atualizado: ${frutas.push("Morango", "Abacaxi"), frutas.shift(), frutas}`;
        }

        function executarExercicio12() {
            const minhaVariavel = "Olá, mundo!";
            const tipo = typeof minhaVariavel;
            document.getElementById("resultado12").textContent = `Tipo da variável: ${tipo}`;
        }

        function executarExercicio13() {
            const num1 = parseFloat(prompt("Digite o primeiro número:"));
            const num2 = parseFloat(prompt("Digite o segundo número:"));
            const operador = prompt("Digite o operador (+, -, *, /):");
            let resultado;
            switch (operador) {
                case "+":
                    resultado = num1 + num2;
                    break;
                case "-":
                    resultado = num1 - num2;
                    break;
                case "*":
                    resultado = num1 * num2;
                    break;
                case "/":
                    if (num2 === 0) {
                        document.getElementById("resultado13").textContent = "Erro: Divisão por zero não é permitida.";
                    } else {
                        resultado = num1 / num2;
                    }
                    break;
                default:
                    document.getElementById("resultado13").textContent = "Operador inválido.";
            }
            if (resultado !== undefined) {
                document.getElementById("resultado13").textContent = `Resultado: ${resultado}`;
            }
        }
    </script>

</body>
</html>