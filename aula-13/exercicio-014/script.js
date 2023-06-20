function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = "fotomanha.PNG"
        document.body.style.background = '#e2cd9f'
    }  else if (hora >= 12 && hora < 18) {
        //BOA TARDE!
        img.src = "fototarde.PNG"
        document.body.style.background = '#b9846f'
    }  else {
        // BOA NOITE!
        img.src = "fotonoite.PNG"
        document.body.style.background = '#515154'
    }
}
