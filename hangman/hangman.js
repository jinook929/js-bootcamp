const Hangman = function(word, remainingGuesses) {
  this.word = word.toLowerCase().split('');
  this.remainingGuesses = remainingGuesses;
  this.guessedLetters = [];
}

Hangman.prototype.getPuzzle = function() {
  let puzzle = '';
  
  this.word.forEach(letter => {
    if(this.guessedLetters.includes(letter) || letter === ' ') {
      puzzle += letter;
    } else {
      puzzle += '*';
    }
  })

  return puzzle;
}

Hangman.prototype.makeGuess = function(guess) {
  guess = guess.toLowerCase();
  let isUnique = !this.guessedLetters.includes(guess);
  let isWrong = !this.word.includes(guess.toLowerCase());

  if(guess && isUnique && isWrong) {
    this.remainingGuesses--;
  }

  if(guess && isUnique) {
    this.guessedLetters.push(guess);
  }
}

const game1 = new Hangman('Cat', 2); // console.log(game1.getPuzzle(), game1.remainingGuesses)

const game2 = new Hangman('Running Zebra', 3); console.log(game2.getPuzzle(), game2.remainingGuesses)

window.addEventListener('keypress', (e) => {
  // let guess = String.fromCharCode(e.charCode); --> Andrew's way
  let guess = e.key;
  if(guess === 'Enter' || guess === ' ' || game2.guessedLetters.includes(guess)) {
    return;
  }
  // game1.makeGuess(guess)
  game2.makeGuess(guess)
  // console.log(`Game1 - "${guess}" tried: ${game1.getPuzzle()} [${game1.remainingGuesses} chance(s) left]`)
  console.log(`Game2 - "${guess}" tried: ${game2.getPuzzle()} [${game2.remainingGuesses} chance(s) left]`)
})