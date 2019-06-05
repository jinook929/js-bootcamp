const Person = function(firstName, lastName, age, likes = []) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.likes = likes;
};
// console.log(Person)
Person.prototype.getBio = function() {
  let bio = `${this.firstName} is ${this.age}. The last name of this person is ${this.lastName}.`;

  this.likes.forEach(like => {
    bio += ` ${this.firstName} likes ${like.toLowerCase()}.`
  })

  return bio;
}
// console.log(Person.prototype)
Person.prototype.setName = function(fullName) {
  this.firstName = fullName.split(' ')[0];
  this.lastName = fullName.split(' ')[1];
}
// console.log(Person.prototype)
const me = new Person('Jinook', 'Jung', 44, ['Teaching', 'Biking']);
console.log(me)
console.log(me.getBio())

me.setName('Alex Turner')
// me.getBio = function() {
//   return 'This is fake!';
// }
console.log(me)
console.log(me.getBio())
me.getBio = function() {
  return 'getBio has been assigned to the internal property instead of using prototypal inheritance!!!'
}
console.log(me)
console.log(me.getBio())

const you = new Person('Sunmi', 'Chang', 50);
// Person.prototype.getBio = function() {
//   return 'Testing~';
// }
you.__proto__.greeting = function() { // This will affect the Person constructor function's prototype.
  return 'Hello'
}
console.log(you)
console.log(you.greeting())
console.log(you.__proto__.__proto__.hasOwnProperty('hasOwnProperty'))
console.log(you.getBio())



// class Person {
//   constructor(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }
  
//   greeting = () => {
//     console.log(`Hello, my name is ${this.firstName} ${this.lastName}. I'm ${this.age}.`)
//   }
// }
