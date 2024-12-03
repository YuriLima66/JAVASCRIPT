function verificar(){
    var data= new Date()
    var ano = data.getFullYear()
    var form_ano= document.querySelector('input#txt_ano')
    var res= document.getElementById('res')


    if(form_ano.value.length == 0){
        window.alert('Por favor, preencha o campo com o ano!')
    }else{
        var form_sex = document.getElementsByName('rad_sex')
        var idade= ano- Number(form_ano.value)
        res.innerHTML= `Idade calculada :`
        
    }
}