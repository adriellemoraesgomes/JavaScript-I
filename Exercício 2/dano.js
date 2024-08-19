const atacante = prompt("Qual é o nome do personagem atacante?")
const poderdeataque = parseFloat(prompt("Qual é o seu poder de ataque?"))

const defensor = prompt("Qual é o nome do personagem defensor?")
let pontosdevida = parseFloat(prompt("Quantos pontos de vida ele possui?"))
const poderdedefesa = parseFloat(prompt("Qual é o seu poder de defesa?"))
const  possuiescudo = prompt("Ele possui um escudo? (Sim/Não)")

let danocausado = 0

if (poderdeataque > poderdedefesa && possuiescudo === "Não") {
    danocausado = poderdeataque - poderdedefesa
} else if (poderdeataque > poderdedefesa && possuiescudo === "Sim") {
   danocausado = (poderdeataque - poderdedefesa) / 2 
}

pontosdevida -= danocausado

alert(atacante + " causou " + danocausado + " pontos de dano em " + defensor)
alert(
    atacante + "\nPoder de ataque: " + poderdeataque + "\n\n" +
    defensor + "\nPontos de vida: " + pontosdevida + 
    "\nPoder de defesa: " + poderdedefesa + "\nPossui escudo: " + possuiescudo
)