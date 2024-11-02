const html = document.querySelector('html')
const botonCorto = document.querySelector('.app__card-button--corto')
const botonEnfoque = document.querySelector('.app__card-button--enfoque')
const botonLargo = document.querySelector('.app__card-button--largo')
const banner = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')
const botones = document.querySelectorAll('.app__card-button')
const inputEnfoqueMusica = document.querySelector('#alternar-musica')
const musica = new Audio('./sonidos/luna-rise-part-one.mp3')
const botonIniciarPausar = document.querySelector("#start-pause")

let tiempoTranscurridoEnSegundos = 5
let idIntervalo = null

musica.loop = true // sirve para escuchar la musica por el tiempo que uno desee

inputEnfoqueMusica.addEventListener('change', ()=> {
    if(musica.paused){
        musica.play()
        
    }else{
        musica.pause()
    }

})

botonCorto.addEventListener('click', () => {
    cambiarContexto ('descanso-corto') 
    botonCorto.classList.add('active')
    //html.setAttribute('data-contexto', 'descanso-corto')
    //banner.setAttribute('src', './imagenes/descanso-corto.png')
})

botonEnfoque.addEventListener('click', () => {
    cambiarContexto ('enfoque')
    botonEnfoque.classList.add('active')
    //html.setAttribute('data-contexto', 'enfoque' )
    //banner.setAttribute('src', './imagenes/enfoque.png')
})

botonLargo.addEventListener('click', () => {
    cambiarContexto ('descanso-largo')
    botonLargo.classList.add('active')
    //html.setAttribute('data-contexto', 'descanso-largo' )
    //banner.setAttribute('src', './imagenes/descanso-largo.png')
})

function cambiarContexto(contexto){

    botones.forEach(function(contexto){
        contexto.classList.remove('active')
    })


    html.setAttribute('data-contexto',contexto)
    banner.setAttribute('src', `./imagenes/${contexto}.png`)

    switch (contexto) {
        case "enfoque":
            titulo.innerHTML = `
            Optimiza tu productividad,<br>
                <strong class="app__title-strong">sumérgete en lo que importa.</strong>`
            
            break;
        case "descanso-corto":
            titulo.innerHTML = `
            ¿Qué tal tomar un respiro? 
           <strong class="app__title-strong"> ¡Haz una pausa corta!</strong>
           `
           break;
           case "descanso-largo":
            titulo.innerHTML = `
            Hora de volver a la superficie
            <strong class="app__title-strong"> Haz una pausa larga.</strong>
            `

        default:
            break;
    }


}

const cuentaRegresiva = () => {
    if(tiempoTranscurridoEnSegundos <= 0){
        reiniciar()
        alert('Tiempo final')
        return  //interrumpir el flujo de la aplicación
    }
    tiempoTranscurridoEnSegundos -= 1
    console.log("Temporizador:" + tiempoTranscurridoEnSegundos)
}

botonIniciarPausar.addEventListener('click', iniciarPausar)

function iniciarPausar(){
    if(idIntervalo){
        reiniciar()
        return
    }
    idIntervalo = setInterval(cuentaRegresiva,1000)
}

function reiniciar(){
    clearInterval(idIntervalo)
    idIntervalo = null
}