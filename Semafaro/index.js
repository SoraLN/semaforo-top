//------------FAROL------------------//

//VERMELHO
const vermelho_sombra = document.getElementById(`vermelho_sombra`)
const vermelho_central = document.getElementById(`vermelho_central`)

//AMARELO
const amarelo_sombra = document.getElementById(`amarelo_sombra`)
const amarelo_central = document.getElementById(`amarelo_central`)

//VERDE
const verde_sombra = document.getElementById(`verde_sombra`)
const verde_central = document.getElementById(`verde_central`)

//------------BOTAO------------------//

const botao = document.getElementById(`botao_id`)

//-----------------------------------//
function add_cor(sombra, centro, sombra1, centro1, tempo1, tempo2){

    setTimeout(()=>{
        sombra.classList.add(sombra1)
        setTimeout(()=>{
            sombra.classList.remove(sombra1)
        },tempo2)
    
        centro.classList.add(centro1)
        setTimeout(()=>{
            centro.classList.remove(centro1)
        },tempo2)
    },tempo1)
}

const vermelho = (()=>{
    add_cor(vermelho_sombra, vermelho_central, "farol_vermelho", "circulo-central-vermelho", 0, 5000)
})
const amarelo = (()=>{
    add_cor(amarelo_sombra, amarelo_central, "farol_amarelo", "circulo-central-amarelo", 5000, 2000)
})
const verde = (()=>{
    add_cor(verde_sombra, verde_central, "farol_verde", "circulo-central-verde", 7000, 5000)
})

botao.addEventListener(`click`, ()=>{

    botao.classList.add(`botao_clicado`)

    setTimeout(()=>{
        botao.classList.remove(`botao_clicado`)
    },13000)

    vermelho()
    amarelo()
    verde()

})