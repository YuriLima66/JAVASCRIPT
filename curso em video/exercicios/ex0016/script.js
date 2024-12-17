function contar() {
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let resultado = document.querySelector('div#res')

    if (inicio.value.lenght == 0 || fim.value.length == 0 || passo.value.lenght == 0) {
        alert('Preencha todos os campos!')
    } else {
        resultado.innerHTML = ('Contando<br>')
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {
            alert('Passo inválido! Considerando passo 1')
            p = 1
            if (i < f) {
                for (let c = i; c <= f; c += p)/*contagem crescente */ {
                    if (c % 2 == 0) {
                        resultado.innerHTML += `${c} é par \u{1F449} <br> `;

                    } else {
                        resultado.innerHTML += `${c} é impar \u{1F3C1} <br> `;
                    }

                }
            } else {
                for (let c = i; c >= f; c -= p) /*contagem decrescente */ {
                    if (c % 2 == 0) {
                        resultado.innerHTML += `${c} é par \u{1F449} <br> `;

                    } else {
                        resultado.innerHTML += `${c} é impar \u{1F3C1} <br> `;
                    }

                }

            }
        }
    }
}
function modoEscuro() {
    const element = document.body;
    const botao = document.querySelector('header#botao_mode');

    element.classList.toggle("modo-escuro");
    botao.style.backgroundColor = element.classList.contains("modo-escuro") ? 'white' : '';
    botao.style.color = element.classList.contains("modo-escuro") ? 'black' : '';
}

