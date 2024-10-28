class Semaforo {
    // 1. Construtor da classe Semaforo.
    constructor() {
        // 2. Inicializa a propriedade luzAtual com o valor 'vermelho'.
        this.luzAtual = 'vermelho';
        // 3. Seleciona os elementos HTML com os IDs 'vermelho', 'amarelo' e 'verde' e os armazena nas propriedades correspondentes.
        this.vermelho = document.getElementById('vermelho');
        this.amarelo = document.getElementById('amarelo');
        this.verde = document.getElementById('verde');
    }

    // 4. Define o método mudarLuz que altera o estado do semáforo.
    mudarLuz() {
        // 5. Utiliza um switch para determinar a próxima luz a ser acionada com base no valor de luzAtual.
        switch (this.luzAtual) {
            case 'vermelho':
                // 6. Se a luz atual é vermelha, muda para verde.
                this.vermelho.style.backgroundColor = 'red';
                this.amarelo.style.backgroundColor = 'gray';
                this.verde.style.backgroundColor = 'gray';
                this.luzAtual = 'verde';
                break;
            case 'verde':
                // 7. Se a luz atual é verde, muda para amarelo.
                this.vermelho.style.backgroundColor = 'gray';
                this.amarelo.style.backgroundColor = 'yellow';
                this.verde.style.backgroundColor = 'gray';
                this.luzAtual = 'amarelo';
                break;
            case 'amarelo':
                // 8. Se a luz atual é amarela, muda para vermelha.
                this.vermelho.style.backgroundColor = 'gray';
                this.amarelo.style.backgroundColor = 'gray';
                this.verde.style.backgroundColor = 'green';
                this.luzAtual = 'vermelho';
                break;
        }
    }
}

// 9. Cria uma instância da classe Semaforo chamada meuSemaforo.
const meuSemaforo = new Semaforo();

// 10. Seleciona o elemento HTML com o ID 'botao' e adiciona um event listener para o evento 'click'.
document.getElementById('botao').addEventListener('click', () => meuSemaforo.mudarLuz());

// 11. Quando o botão é clicado, a função mudarLuz da instância meuSemaforo é chamada.