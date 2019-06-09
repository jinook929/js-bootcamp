const Hangman = function (word, remainingGuesses) {
  this.word = word.toLowerCase().split('');
  this.remainingGuesses = remainingGuesses;
  this.guessedLetters = [];
  this.status = 'Playing';
}

Hangman.prototype.getPuzzle = function () {
  let puzzle = '';

  this.word.forEach(letter => {
    if (this.guessedLetters.includes(letter) || letter === ' ') {
      puzzle += letter;
    } else {
      puzzle += '*';
    }
  })

  return puzzle;
}

Hangman.prototype.makeGuess = function (guess) {
  guess = guess.toLowerCase();
  let isUnique = !this.guessedLetters.includes(guess);
  let isWrong = !this.word.includes(guess.toLowerCase());
  
  if(this.status !== 'Playing') { // failed or finished situation
    return;
  } else { // playing situation
    if (isUnique && isWrong) { // decrement remaining guesses
      this.remainingGuesses--;
    }

    if (isUnique) { // add guess letter to guessedLetters array
      this.guessedLetters.push(guess);
    }

    // display gameMsg
    gameMsg.innerHTML = `Guess #${this.guessedLetters.length} - "${guess}" tried: ${this.getPuzzle()} [${this.remainingGuesses} guess(es) left]<p><small>(Letters You Tried: ${this.guessedLetters.sort().join()})</small></p>`;

    this.calculatingStatus(); // calculate playing status, then print game result
    this.statusMsg(); // display message based on status
  }
}

Hangman.prototype.statusMsg = function () {
  let gameResult = document.createElement('h4')
  if(this.status === 'Failed') {
    console.log('failed')
    gameResult.innerHTML = `Nice try! The answer was "${this.word.join('')}".`;
    puzzleDisplay.appendChild(gameResult);
  } else if(this.status === 'Finished') {
    console.log('finished')
    gameResult.innerHTML = `Great work! You guessed the word.`;
    puzzleDisplay.appendChild(gameResult);
  } else {
    console.log('playing')
  }
}

Hangman.prototype.calculatingStatus = function () {
  let answerletters = this.word.filter(e => String(e).trim());
  // Way #1. sort
  // answerletters = [...new Set(answerletters)].sort();
  // function array_diff(a, b) {
  //   var tmp={}, res=[];
  //   for(var i=0;i<a.length;i++) tmp[a[i]]=1;
  //   for(var i=0;i<b.length;i++) { if(tmp[b[i]]) delete tmp[b[i]]; }
  //   for(var k in tmp) res.push(k);
  //   return res;
  // }

  // Way #2. forEach
  // answerletters.forEach((letter) => {
  //   if(this.guessedLetters.includes(letter)) {

  //   } else {
  //     finished = false;
  //   }
  // });
  // console.log(finished)

  // Way #3. filter
  // let remainingLetters = answerletters.filter(letter => {
  //   return !this.guessedLetters.includes(letter);
  // });

  // Way #4. every
  let finished = answerletters.every(letter => this.guessedLetters.includes(letter)); 
  if (this.remainingGuesses === 0) {
    this.status = 'Failed';
  } else if (finished) {
    this.status = 'Finished';
  } else {
    this.status = 'Playing';
  }
}

Hangman.prototype.init = function () {
  const puzzleDisplay = document.querySelector('#puzzleDisplay');
  puzzleDisplay.innerHTML = '';
  puzzleDisplay.innerHTML = `<h3>Game Word: ${this.getPuzzle()} [You have ${this.remainingGuesses} guessing chances]</h3><p id="gameMsg">Make your guess and just type it.</p>`;
}