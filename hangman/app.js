const game = new Hangman('newPuzzle', 3);
game.init();

window.addEventListener('keypress', (e) => {
  let guess = String.fromCharCode(e.charCode); // guess = e.key;
  if(guess === 'Enter' || guess === ' ' || game.guessedLetters.includes(guess)) {
    return;
  }
  game.makeGuess(guess)
});

let newPuzzle = getPuzzle('2').then((puzzle) => {
  console.log(puzzle)
}, (err) => {
  console.log(`Error: ${err}`)
});
console.log(newPuzzle)