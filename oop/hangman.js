const Hangman = function(word, remainingGuesses) {
  this.word = word.toLowerCase().split('');
  this.remainingGuesses = remainingGuesses;
  this.guessedLetters = [];
}
// class Hangman {
//   constructor(word, allowedGuesses) {
//     this.word = word.toLowerCase().split('');
//     this.allowedGuesses = allowedGuesses;
//     this.guessedLetters = [];
//   }
// }

Hangman.prototype.getPuzzle = function(letter) {
  this.guessedLetters.push(letter); console.log(this.guessedLetters)

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

const game1 = new Hangman('Cat', 2);
console.log(game1.word)
console.log(game1.getPuzzle('a'))
console.log(game1.getPuzzle('b'))
console.log(game1.getPuzzle('c'))

const game2 = new Hangman('running zebra', 3);
console.log(game2.getPuzzle('a'))
console.log(game2.getPuzzle('e'))
console.log(game2.getPuzzle('i'))
console.log(game2.getPuzzle('o'))
console.log(game2.getPuzzle('u'))