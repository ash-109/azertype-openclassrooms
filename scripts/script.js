function afficherResultat(score, nbMotsProposes) {
  let affichageScore = document.getElementById(".score span");
  affichageScore.innerText = `${score} / ${nbMotsProposes}`;
}

function afficherProposition(proposition) {
  let motApplication = document.querySelector(".motApplication");
  motApplication.innerText = proposition;
}

function lancerJeu() {
  let score = 0;
  let i = 0;
  let listeProposition = listeMots;

  let btnValidation = document.getElementById("btnValidation");
  let motJoueur = document.getElementById("motJoueur");
  afficherProposition(listeProposition[i]);
  // Gestion du click sur le bouton valider
  btnValidation.addEventListener("click", () => {
    console.log(motJoueur.value);
    if (motJoueur.value === listeProposition[i]) {
      score++;
    }
    i++;
    afficherResultat(score, i);
    motJoueur.value = "";
    if (listeProposition[i] === undefined) {
      afficherProposition("Le jeu est fini");
      btnValidation.disabled = true;
    } else {
      afficherProposition(listeProposition[i]);
    }
  });

  // Gestion de l'événement change sur les boutons radios.

  let inputRadio = document.querySelectorAll("input[type=radio]");
  console.log(inputRadio);

  for (let index = 0; index < inputRadio.length; index++) {
    inputRadio[index].addEventListener("change", (event) => {
      // Si c'est le premier élément qui a été modifié, alors nous voulons
      // jouer avec la listeMots.
      if (event.target.value === "mots") {
        listeProposition = listeMots;
      } else {
        // Sinon nous voulons jouer avec la liste des phrases
        listeProposition = listePhrases;
      }
      // Et on modifie l'affichage en direct.
      afficherProposition(listeProposition[i]);
    });
  }
  afficherResultat(score, i);
}
