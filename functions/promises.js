// Callback
const getDataCallback = (callback) => {
  setTimeout(() => {
    callback(undefined, 'This is the data');
    // callback('This is the callback error', undefined);
  }, 2000);
};

getDataCallback((err, data) => {
  if(err) {
    console.log(`Error: ${err}`);
  } else {
    console.log(data);
  }
});

// Promise
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('This is the promise data');
    reject('This is a promise error');
  }, 2000);
});

myPromise.then((data) => {
  console.log(data)
}, (err) => {
  console.log(`Promise Error: ${err}`)
});

myPromise.then((data) => {
  console.log(data)
}, (err) => {
  console.log(`Promise Error: ${err}`)
});