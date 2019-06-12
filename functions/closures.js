const outer = () => {
  const x = 3;
  return () => {
    console.log(`You have ${x} more chances.`)
  }
}

const myFunc = outer(); console.log(myFunc)
myFunc();

const createCounter = () => {
  let count = 0;

  return {
    increment() {
      count++;
    },
    decrement() {
      count--;
    },
    get() {
      return count;
    }
  }
}

const counter = createCounter();
counter.increment();
console.log(counter.get())
counter.increment();
console.log(counter.get())
counter.increment();
console.log(counter.get())
counter.decrement();
console.log(counter.get())
counter.decrement();
console.log(counter.get())

const adder = (a) => {
  return (b) => {
    return a + b;
  }
}

const add10 = adder(10);
console.log(add10(7));
const add23 = adder(23);
console.log(add23(70));

const createTipper = (tipPercentage = 0.15) => {
  return (bill) => { 
    return bill * tipPercentage;
  }
}

const tip15 = createTipper();
console.log(`Bill amount: ${x = 100}, Tip: ${tip15(x)} -> Total: ${x + tip15(x)}`)
const tip20 = createTipper(0.2);
console.log(`Bill amount: ${x = 100}, Tip: ${tip20(x)} -> Total: ${x + tip20(x)}`)
const tip25 = createTipper(0.25);
console.log(`Bill amount: ${x = 100}, Tip: ${tip25(x)} -> Total: ${x + tip25(x)}`)
