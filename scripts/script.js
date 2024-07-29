function afficherResultat(score, nbMotsProposes) {
  affichageScore.innerText = `${score} / ${nbMotsProposes}
`;
}

function afficherProposition(proposition) {
  let motApplication = document.querySelector(".motApplication");
  motApplication.innerText = proposition;
}

function lancerJeu() {
  let score = 0;
  let nbMotsProposes = 0;
  let i = 0;

  let btnValidation = document.getElementById("btnValidation");
  let motJoueur = document.getElementById("motJoueur");
  afficherProposition(listeMots[i]);

  btnValidation.addEventListener("click", () => {
    console.log(motJoueur.value);
    if (motJoueur.value === listeMots[i]) {
      score++;
    }
    i++;
    afficherResultat(score, i);
    motJoueur.value = "";
    if (listeMots[i] === undefined) {
      afficherProposition("Le jeu est fini");
      btnValidation.disabled = true;
    } else {
      afficherProposition(listeMots[i]);
    }
  });
  afficherResultat(score, i);
}
