// Primitive Value: string, number, boolean, null, undefined

// Object: myObject --> Object.prototype --> null
// Array: myArray --> Array.prototype --> Object.prototype --> null
// Function: myFunction --> Function.prototype --> Object.prototype --> null
// String: myString --> String.prototype --> Object.prototype --> null
// Number: myNumber --> Number.prototype --> Object.prototype --> null
// Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null

const product = {
  name: 'Influence'
};

Object.prototype.someNewMethod = () => 'This is a new function'
console.log('name@product', product.hasOwnProperty('name'))
console.log('price@product', product.hasOwnProperty('price'))
console.log('someNewMethod@product', product.hasOwnProperty('someNewMethod'))
console.log('someNewMethod@product.__proto__', product.__proto__.hasOwnProperty('someNewMethod'))
console.log('someNewMethod', product.someNewMethod())
console.log(product)

const product1 = new Object();
console.log(product1)
product1.name = 'rest'
console.log(product1)

const product2 = new Object({
  name: 'The War of Art'
});
console.log(product2)

const team = ['Tim', 'Maddy'];
console.log(team)
console.log('length method@team',team.hasOwnProperty('length'))
console.log('filter method@team',team.hasOwnProperty('filter'))
console.log('filter method@prototype',team.__proto__.hasOwnProperty('filter'))
console.log(team.someNewMethod())

const team1 = new Array();
console.log(team1)
team1[0] = 'rest'
console.log(team1)

const team2 = new Array('Tom', 'Mulan');
console.log(team2)

const getScore = () => 1;
console.log(getScore)

const functionExample = function() {
  return 3;
}
console.log(functionExample.__proto__.hasOwnProperty('toString'))
console.log(functionExample.__proto__.__proto__.hasOwnProperty('hasOwnProperty'))

const item = 'Computer'
console.log(item)

const otherItem = new String('Phone');
console.log(otherItem)

const num = new Number(123);
console.log(num)