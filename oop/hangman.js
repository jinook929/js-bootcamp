// class Hangman {
//   constructor(word, allowedGuesses) {
//     this.word = word.toLowerCase().split('');
//     this.allowedGuesses = allowedGuesses;
//     this.guessedLetters = [];
//   }
// }
const Hangman = function(word, remainingGuesses) {
  this.word = word.toLowerCase().split('');
  this.remainingGuesses = remainingGuesses;
  this.guessedLetters = [];
}

Hangman.prototype.getPuzzle = function(letter) {
  if(letter) {
    this.guessedLetters.push(letter); console.log('guessedLetter array', this.guessedLetters)
  }
  
  let puzzle = '';
  console.log('getPuzzle this.word',this.word)
  this.word.forEach(letter => {
    if(this.guessedLetters.includes(letter) || letter === ' ') {
      puzzle += letter;
    } else {
      puzzle += '*';
    }
  })

  return puzzle;
}

const game1 = new Hangman('Cat', 2);
console.log('Game1 Word', game1.word)
console.log('Game2 - No guess yet:', game1.getPuzzle())
console.log('a:', game1.getPuzzle('a'))
console.log('b:', game1.getPuzzle('b'))
console.log('c:', game1.getPuzzle('c'))

const game2 = new Hangman('Running zebra', 3);
console.log('Game2 - No guess yet:', game2.getPuzzle())
console.log(game2.getPuzzle('a'))
console.log(game2.getPuzzle('e'))
console.log(game2.getPuzzle('i'))
console.log(game2.getPuzzle('o'))
console.log(game2.getPuzzle('u'))