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

// // Making an HTTP request
// const request = new XMLHttpRequest();
// let puzzle;

// request.addEventListener('readystatechange', (e) => {
//   if(e.target.readyState === 4 && e.target.status === 200) {
//     const data = JSON.parse(e.target.responseText);
//     console.log('from event listener: ',data.puzzle)
//     puzzle = data.puzzle
//   } else if(e.target.readyState === 4) {
//     console.log('An error has taken place')
//   }
// })

// request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3');
// request.send();
// console.log('puzzle ready: ',puzzle)

// XMLHttpRequest Challenge
// const countryCode = 'US';
// const countryRequest = new XMLHttpRequest();

// countryRequest.addEventListener('readystatechange', (e) => {
//   if(e.target.readyState === 4 && e.target.status === 200) {
//     const countryData = JSON.parse(e.target.responseText);
//     const country = countryData.find(country => countryCode === country.alpha2Code);
//     console.log(`Country name for "${country.alpha2Code}": ${country.name}`)
//     // for(let index in countryData) {
//     //   if(countryCode === countryData[index].alpha2Code) {
//     //     console.log(`Country name: ${countryData[index].name}`)
//     //   }
//     // }
//   } else if(e.target.readyState === 4) {
//     console.log('Unable to fetch data')
//   }
// });

// countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all');
// countryRequest.send();

const getCountryName = (countryCode, callback) => {
  const countryRequest = new XMLHttpRequest();

  countryRequest.addEventListener('readystatechange', (e) => {
    if(e.target.readyState === 4 && e.target.status === 200) {
      const countryData = JSON.parse(e.target.responseText);
      const country = countryData.find(country => countryCode === country.alpha2Code);
      callback(undefined, country)
    } else if(e.target.readyState === 4) {
      callback('Unable to fetch data', undefined)
    }
  });

  countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all');
  countryRequest.send();
}

getCountryName('US', (error, country) => {
  if(error) {
    console.log(`Error: ${error}`)
  } else {
    console.log(`Country name for "${country.alpha2Code}": ${country.name}`)
  }
})