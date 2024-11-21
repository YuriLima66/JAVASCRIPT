function carregar() {
    const msg = document.querySelector('div#msg');
    const img = document.getElementById('imagem');
    const data = new Date();
    const min = data.getMinutes();
    const hora = data.getHours();
    const dia = data.getDate();
    const semana = data.getDay();
    const diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

    msg.innerHTML = `Agora são ${hora}:${min}, hoje é dia ${dia}, ${diasSemana[semana]}`;

    if (hora >= 0 && hora < 12) {
        img.src = 'img/manha.png';
        msg.style.color = 'blue';
        document.body.style.background = '#87CEEB';
        foto.innerHTML += '<p>Bom Dia</p>'

    } else if (hora >= 12 && hora < 18) {
        img.src = 'img/tarde.png';
        msg.style.color = 'orange';
        document.body.style.background = '#FFA500';
        foto.innerHTML += '<p>Boa Tarde</p>'

    } else {
        img.src = 'img/noite.png';
        msg.style.color = '#0E0D0B';
        document.body.style.background = '#0E0D0B';
        foto.innerHTML += '<p>Boa Noite</p>'

    }
}





