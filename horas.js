function calcular() {
    var msg = document.getElementById("msg")
    var img = document.getElementById("img")
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        msg.innerHTML = `Bom dia! Agora são ${hora}:${minutos} horas.`
        img.src = 'manhã.jpeg'
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML = `Boa tarde! Agora são ${hora}:${minutos} horas.`
        img.src =  'tarde.jpg'
        document.body.style.background = 'linear-gradient(to left, rgba(114, 9, 175, 0.73), rgb(250, 100, 0), rgb(255, 162, 0), rgb(250, 100, 0), rgba(114, 9, 175, 0.73))'
        document.body.style.color = 'rgb(150, 64, 0)'
    } else {
        msg.innerHTML = `Boa noite! Agora são ${hora}:${minutos} horas.`
        img.src = 'noite.jpeg'
        document.body.style.background = 'linear-gradient(to right, rgb(25, 2, 102), rgb(22, 6, 75), rgb(10, 2, 36),rgb(22, 6, 75), rgb(25, 2, 102))'
        document.body.style.color = 'rgb(151, 136, 202)'
        msg.style.color = 'rgb(22, 6, 75)'
    }
}