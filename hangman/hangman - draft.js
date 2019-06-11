const Hangman = function(word, remainingGuesses) {
  this.word = word.toLowerCase().split('');
  this.remainingGuesses = remainingGuesses;
  this.guessedLetters = [];
}

Hangman.prototype.getPuzzle = function(guessLetter) {
  let puzzle = '';
  
  let isUnique = !this.guessedLetters.includes(guessLetter);
  
  if(guessLetter && isUnique) {
    this.guessedLetters.push(guessLetter);
  }  

  if(guessLetter && isUnique && !this.word.includes(guessLetter.toLowerCase())) {
    this.remainingGuesses--;
  }

  this.word.forEach(letter => {
    if(this.guessedLetters.includes(letter) || letter === ' ') {
      puzzle += letter;
    } else {
      puzzle += '*';
    }
  })

  return `${puzzle} [remaining guess(es): ${this.remainingGuesses}]`;
}

const game1 = new Hangman('Cat', 2); console.log('game1',game1)
// console.log('Game1 - No guess yet:', game1.getPuzzle())
// console.log('Game1 - "c" tried:', game1.getPuzzle('c'))
// console.log('Game1 - "c" tried:', game1.getPuzzle('c'))
// console.log('Game1 - "z" tried:', game1.getPuzzle('z'))
// console.log('Game1 - "z" tried:', game1.getPuzzle('z'))
// console.log('Game1 - "t" tried:', game1.getPuzzle('t'))
// console.log('Game1 - "a" tried:', game1.getPuzzle('a'))

// const game2 = new Hangman('Running Zebra', 3);
// console.log('Game2 - No guess yet:', game2.getPuzzle())
// console.log('Game2 - "r" tried:', game2.getPuzzle('r'))
// console.log('Game2 - "a" tried:', game2.getPuzzle('a'))

window.addEventListener('keypress', (e) => {
  // let guess = String.fromCharCode(e.charCode);
  let guess = e.key;
  if(guess === 'Enter' || guess === ' ') {
    return;
  }
  console.log(`Game1 - "${guess}" tried:`, game1.getPuzzle(guess))
})