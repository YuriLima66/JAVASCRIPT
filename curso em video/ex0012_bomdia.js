var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getMinutes()
var horaCompleta = `${hora}:${minutos}`


if (hora >= 4 && hora < 12) {
    saudacao = ('Bom Dia!')
} else if (hora > 12 && hora < 18) {
    saudacao = ('Boa Tarde!')

} else if (hora > 18) {
    saudacao = ('Boa Noite!')
} else{
    saudacao = ('Vá dormir.')
}
console.log(`Agora são ${horaCompleta}, ${saudacao} `)