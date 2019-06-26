const getPuzzle = (wordCount) => new Promise((resolve, reject) => {
  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', (e) => {
    if(e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText);
      resolve(data.puzzle)
    } else if(e.target.readyState === 4) {
      reject('An error has taken place')
    }
  })

  request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
  request.send();
})

// const game = new Hangman('Troy', 3);

// game.init();

window.addEventListener('keypress', (e) => {
  let guess = String.fromCharCode(e.charCode); // guess = e.key;
  if(guess === 'Enter' || guess === ' ' || game.guessedLetters.includes(guess)) {
    return;
  }
  game.makeGuess(guess)
});

let game = {};
getPuzzle('2').then((puzzle) => {
  game = new Hangman(puzzle, 5); 
  game.init(); console.log('Random Word: ',puzzle); 
}, (err) => {
  console.log(`Error: ${err}`)
});
