const listeMots = ["Cachalot", "Pétunia", "Serviette"];
const listePhrases = [
  "Pas de panique !",
  "La vie, l’univers et le reste",
  "Merci pour le poisson",
];
let score = 0;

//choix de la liste avec laquelle l'utilisateur veut jouer
let choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")

// repeter le prompt tant que l'utilisateur n'a pas choisi entre "mots" et "phrases"
 while (choix !== "mots" && choix !== "phrases") {
    choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
}


// Si l'utilisateur choisi la liste de mots
if (choix==="mots") {
   for (let i = 0; i < listeMots.length; i++) {
  let motUtilisateur = prompt("Entrez le mot " + listeMots[i]);
  if (motUtilisateur === listeMots[i]) {
    score++;
  } 
}
console.log("Votre score est de " + score + " sur " + listeMots.length);

}else {
    
    for (let i = 0; i < listePhrases.length; i++) {
        let phraseUtilisateur = prompt("Entrez la phrase : " + listePhrases[i])
        if (phraseUtilisateur === listePhrases[i]) {
         
            score++
        }
    }
    console.log("Votre score est de " + score + " sur " + listePhrases.length)
}
