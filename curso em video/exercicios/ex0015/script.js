function verificar() {
	var data = new Date()
	var ano = data.getFullYear()
	var form_ano = document.querySelector('input#txt_ano')
	var res = document.getElementById('res')


	if (form_ano.value.length == 0) {
		window.alert('Por favor, preencha o campo com o ano!')
	} else {
		var rad_sex = document.getElementsByName('rad_sex')
		var idade = ano - Number(form_ano.value)
		res.innerHTML = `Idade calculada :${idade}`
		var genero = ''
		var img = document.createElement('img')/*criando um elemento com o nome de img dentro do0 meu html*/
		img.setAttribute('id', 'foto')/* definindo o id do novo elemento que estou criando */

		if (rad_sex[0].checked) {
			genero = 'Mulher'
			if (idade >= 0 && idade <= 5) {
				/*crianca */
				img.setAttribute('src', 'img/mulher_5.jpg')
			} 
			else if (idade > 5 && idade <= 10) {
				//criança maior 
				img.setAttribute('src', 'img/mulher_10.jpg')
			} 
			else if (idade > 10 && idade <= 24) {
				/*jovem*/
				img.setAttribute('src', 'img/mulher_25.avif')
			} 
			else if (idade > 24 && idade <= 50) {
				/*adulto*/
				img.setAttribute('src', 'img/mulher_40.avif')
			} 
			else {
				/*idoso*/
				img.setAttribute('src', 'img/mulher_70.webp')
			}

		} else {
			genero = 'Homem'
			if (idade >= 0 && idade <= 5) {
				/*crianca */
				img.setAttribute('src', 'img/homem_5.jpeg')
			} 
			else if (idade > 5 && idade <= 10) {
				//criança maior 
				img.setAttribute('src', 'img/homem_10.webp')
			} 
			else if (idade > 10 && idade <= 24) {
				/*jovem*/
				img.setAttribute('src', 'img/homem_25.jpg')
			} 
			else if (idade > 24 && idade <= 50) {
				/*adulto*/
				img.setAttribute('src', 'img/homem_40.jpg')
			} 
			else {
				/*idoso*/
				img.setAttribute('src', 'img/homem_70.avif')
			}
		}
		res.style.textAlign = 'center'
		img.style.height='200px'
		img.style.borderRadius = '500px'

		res.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos. `
		res.appendChild(img)
	}
}