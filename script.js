const listeMots = ["Cachalot", "Pétunia", "Serviette"]
console.log(listeMots);
let score = 0 
const motUtilisateur = prompt('Tapez : ' + listeMots[0])

if (motUtilisateur === listeMots[0]
) {
    score++
    console.log(score);
}