class Semaforo {
    constructor() {
        this.luzAtual = 'vermelho';
        this.vermelho = document.getElementById('vermelho');
        this.amarelo = document.getElementById('amarelo');
        this.verde = document.getElementById('verde');
    }

    mudarLuz() {
        switch (this.luzAtual) {
            case 'vermelho':
                this.vermelho.style.backgroundColor = 'red';
                this.amarelo.style.backgroundColor = 'gray';
                this.verde.style.backgroundColor = 'gray';
                this.luzAtual = 'verde';
                break;
            case 'verde':
                this.vermelho.style.backgroundColor = 'gray';
                this.amarelo.style.backgroundColor = 'yellow';
                this.verde.style.backgroundColor = 'gray';
                this.luzAtual = 'amarelo';
                break;
            case 'amarelo':
                this.vermelho.style.backgroundColor = 'gray';
                this.amarelo.style.backgroundColor = 'gray';
                this.verde.style.backgroundColor = 'green';
                this.luzAtual = 'vermelho';
                break;
        }
    }
}

const meuSemaforo = new Semaforo();
document.getElementById('botao').addEventListener('click', () => meuSemaforo.mudarLuz());