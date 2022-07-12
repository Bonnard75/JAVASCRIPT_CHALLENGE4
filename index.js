"use strict";

const dauphins = { score1: 97, score2: 112, score3: 101 };
const koalas = { score1: 109, score2: 95, score3: 123 };

function calculeMoyenne(score1, score2, score3) {
  return (score1 + score2 + score3) / 3;
}


const moyenneDauphins = calculeMoyenne(
  dauphins.score1,
  dauphins.score2,
  dauphins.score3
);
console.log("Moyenne des Daulphins : " + moyenneDauphins.toFixed(2));

const moyenneKoalas = calculeMoyenne(
  koalas.score1,
  koalas.score2,
  koalas.score3
);
console.log("Moyennes des Koalas : " + moyenneKoalas.toFixed(2));

if (moyenneDauphins > moyenneKoalas) {
  if (moyenneDauphins < 100) {
    console.log("Pas de gagnant");
  } else {
    console.log("Le gagnant est Dauphins");
  }
} else if (moyenneDauphins < moyenneKoalas) {
  if (moyenneKoalas < 100) {
    console.log("Pas de gagnant");
  } else {
    console.log("Le gagnant est Koalas youppppi !");
  }
}
