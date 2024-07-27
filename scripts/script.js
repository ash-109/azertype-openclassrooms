let score = 0;

function afficherResultat(score, nbMotsProposes) {
  console.log("Votre score est de " + score + " sur " + nbMotsProposes);
}

function choisirPhrasesOuMots(params) {
  //choix de la liste avec laquelle l'utilisateur veut jouer
  let choix = prompt(
    "Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?"
  );

  // repeter le prompt tant que l'utilisateur n'a pas choisi entre "mots" et "phrases"
  while (choix !== "mots" && choix !== "phrases") {
    choix = prompt(
      "Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?"
    );
  }
  return choix;
}

function lancerBoucleDeJeu(listePropositions) {
  let score = 0;
  for (let i = 0; i < listePropositions.length; i++) {
    let motUtilisateur = prompt("Entrez le mot : " + listePropositions[i]);
    if (motUtilisateur === listePropositions[i]) {
      score++;
    }
  }
  return score;
}

function lancerJeu() {
    let choix = choisirPhrasesOuMots()
    let score = 0
    let nbMotsProposes = 0

    
    if (choix === "mots") {
        score = lancerBoucleDeJeu(listeMots)
        nbMotsProposes = listeMots.length
    } else {
        score = lancerBoucleDeJeu(listePhrases)
        nbMotsProposes = listePhrases.length
    }

    afficherResultat(score, nbMotsProposes)
}

