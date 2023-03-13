//hämta resultatet från quizen i localstorage

let resultsFromLs = localStorage.getItem("keyname") || [];

let result = JSON.parse(resultsFromLs);

let alias = result.name;

let score = result.score;

//baserat på totalsumma visa ranking grupp, uträkning geneom poäng
if (score > 10) {
  document.getElementById(
    "scoreDisplay"
  ).innerHTML = `Hej ${alias} ditt resultat blev: ${score}! Grattis du är en riktg mellofantast!`;
}
if (score < 10) {
  document.getElementById(
    "scoreDisplay"
  ).innerHTML = `Hej ${alias} ditt resultat blev: ${score}! Du verkar ha andra intressen än mello!`;
}
