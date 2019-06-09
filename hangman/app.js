const game1 = new Hangman('Cat', 2);
game1.init();
// const game2 = new Hangman('Running Zebra', 3);
// game2.init();

window.addEventListener('keypress', (e) => {
  let guess = e.key;
  if(guess === 'Enter' || guess === ' ' || game1.guessedLetters.includes(guess)) {
  // if(guess === 'Enter' || guess === ' ' || game2.guessedLetters.includes(guess)) {
    return;
  }
  game1.makeGuess(guess)
  // game2.makeGuess(guess);
});