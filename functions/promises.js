// Callback
const getDataCallback = (num, callback) => {
  setTimeout(() => {
    if(typeof num === 'number') {
      callback(undefined, num * 2);
    } else {
      callback('Number must be provided');
    }
  }, 2000);
};

getDataCallback(2, (err, data) => {  
  if(err) {
    console.log(`Error: ${err}`);
  } else {
    getDataCallback(data, (err, data) => {
      if(err) {
        console.log('Error: ', err);
      } else {
        console.log('for data: ',data);
      }
    });
  }
});

// Promise
const getDataPromise = (data) => new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`This is the promise data: ${data}`);
      // reject('This is a promise error');
    }, 2000);
  });

const myPromise = getDataPromise(123);
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

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve('This is the promise data');
//     reject('This is a promise error');
//   }, 2000);
// });