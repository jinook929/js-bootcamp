const game = new Hangman('Hangman Game', 3);
game.init();

window.addEventListener('keypress', (e) => {
  let guess = String.fromCharCode(e.charCode); // guess = e.key;
  if(guess === 'Enter' || guess === ' ' || game.guessedLetters.includes(guess)) {
    return;
  }
  game.makeGuess(guess)
});

getPuzzle('2', (error, puzzle) => {
  if(error) {
    console.log(`Error: ${error}`)
  } else {
    // console.log(puzzle)
    game.word = puzzle.toLowerCase().split('')
    game.init();
  }
});
