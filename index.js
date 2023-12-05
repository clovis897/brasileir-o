let nome = "Clóvis"
let xp = 100
let vitoria = ""

if (xp <= 10) {
  vitoria = "Ferro"
} else if (xp <= 20) {
  vitoria = "Bronze"
} else if (xp <= 50) {
  vitoria = "Prata"
} else if (xp <= 80) {
 vitoria = "Ouro"
} else if (xp <= 90) {
    vitoria = "Diamante"
} else if (xp <= 100) {
    vitoria = "Lendário"
} else if (xp >= 101) {
    vitoria = "Imortal"
}

console.log(`O Herói de nome ${nome} está no nivel ${vitoria} com 100 vitórias`)