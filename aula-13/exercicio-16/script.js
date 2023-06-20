function Verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano ) {
         window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto' )
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'bebehomem.PNG')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovemhomem.PNG')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'homemmaduro.PNG')
            } else {
                // Idoso
                img.setAttribute('src', 'homemvelho.PNG')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'bebemulher.PNG')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovemmulher.PNG')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'mulhermadura.PNG')
            } else {
                // Idoso
                img.setAttribute('src', 'mulhervelha.PNG')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}
