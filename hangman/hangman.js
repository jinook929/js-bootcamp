class Hangman {
  constructor(word, remainingGuesses) {
    this.word = word.toLowerCase().split('');
    this.remainingGuesses = remainingGuesses;
    this.guessedLetters = [];
    this.status = 'playing';
  }
  get puzzle() {
    let puzzle = '';
    this.word.forEach(letter => {
      if (this.guessedLetters.includes(letter) || letter === ' ') {
        puzzle += letter;
      }
      else {
        puzzle += '*';
      }
    });
    return puzzle;
  }
  init() {
    const puzzleDisplay = document.querySelector('#puzzleDisplay');
    puzzleDisplay.innerHTML = '';
    puzzleDisplay.innerHTML = `<h3>Game Word: ${this.puzzle} [You have ${this.remainingGuesses} guessing chances]</h3><p id="gameMsg">Make your guess and just type it.</p>`;
  }
  makeGuess(guess) {
    guess = guess.toLowerCase();
    let isUnique = !this.guessedLetters.includes(guess);
    let isWrong = !this.word.includes(guess.toLowerCase());
    if (this.status !== 'playing') { // failed or finished situation
      return;
    } else { // playing situation
      if (isUnique && isWrong) { // decrement remaining guesses
        this.remainingGuesses--;
      }
      if (isUnique) { // add guess letter to guessedLetters array
        this.guessedLetters.push(guess);
      }
      // display gameMsg
      gameMsg.innerHTML = `Guess #${this.guessedLetters.length} - "${guess}" tried: ${this.puzzle} [${this.remainingGuesses} guess(es) left]<p><small>(Letters You Tried: ${this.guessedLetters.sort().join()})</small></p>`;
      this.calculatingStatus(); // calculate playing status, then print game result
      this.statusMsg; // display message based on status
    }
  }
  calculatingStatus() {
    // let answerletters = this.word.filter(e => String(e).trim());
    let finished = this.word.every(letter => this.guessedLetters.includes(letter) || letter === ' ');
    if (this.remainingGuesses === 0) {
      this.status = 'failed';
    }
    else if (finished) {
      this.status = 'finished';
    }
    else {
      this.status = 'playing';
    }
  }
  get statusMsg() {
    let gameResult = document.createElement('h4');
    if (this.status === 'failed') {
      gameResult.innerHTML = `Nice try! The answer was "${this.word.join('')}".`;
      puzzleDisplay.appendChild(gameResult);
    }
    else if (this.status === 'finished') {
      gameResult.innerHTML = `Great work! You guessed the word.`;
      puzzleDisplay.appendChild(gameResult);
    }
  }
}