function carregar () {

var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')

var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`

if (hora >= 0 && hora < 12) {
    //Dom dia
    img.src = 'manha.png'
    document.body.style.background = '#BDC3C7'
} else if (hora >= 12 && hora < 18){
    //Boa tarde
    img.src = 'tarde.png'
    document.body.style.background = '#E67E22'
} else {
    //Boa noite
    img.src = 'noite.png'
    document.body.style.background = '#2C3E50'
}
}