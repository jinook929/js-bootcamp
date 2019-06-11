class Person {
  constructor(firstName, lastName, age, likes = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.likes = likes;
  }
  getBio() {
    let bio = `${this.firstName} is ${this.age}. The last name of this person is ${this.lastName}.`;
    this.likes.forEach(like => {
      bio += ` ${this.firstName} likes ${like.toLowerCase()}.`;
    });
    return bio;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  set fullName(fullName) {
    this.firstName = fullName.split(' ')[0];
    this.lastName = fullName.split(' ')[1];
  }
  // setName(fullName) {
  //   this.firstName = fullName.split(' ')[0];
  //   this.lastName = fullName.split(' ')[1];
  // }
}

class Employee extends Person {
  constructor(firstName, lastName, age, position, likes = []) {
    super(firstName, lastName, age, likes);
    this.position = position;
  }
  getBio() {
    return `${this.fullName} is a ${this.position.toLowerCase()}.`;
  }
  getYearsLeft() {
    return 65 - this.age;
  }
}
const employee1 = new Employee('Brook', 'Young', 24, 'Director', ['reading', 'swimming']);
console.log(employee1.getBio())
console.log(`(${employee1.getYearsLeft()} years left to retire)`)

class Student extends Person {
  constructor(firstName, lastName, age, grade, likes) {
    super(firstName, lastName, age, likes);
    this.grade = grade;
  }
  getBio() {
    return `${this.firstName} ${this.lastName} is ${this.grade >= 70 ? 'passing' : 'failing'} the class with the score of ${this.grade}.`
  }
  updateGrade(addedScore) {
    this.grade += addedScore;
  }
}
const student1 = new Student('Jane', 'Doe', 15, 65, ['Running']);
student1.fullName = 'Clancey Turner';
console.log(student1.getBio())
student1.updateGrade(20);
console.log(student1.getBio())

// const me = new Person('Jinook', 'Jung', 44, ['Teaching', 'Biking']);
// console.log('me:',me)
// console.log(me.getBio())

// me.setName('Alex Turner')
// // me.getBio = function() {
// //   return 'This is fake!';
// // }
// console.log('me as Alex:',me)
// console.log(me.getBio())
// me.getBio = function() {
//   return 'getBio has been assigned to the internal property instead of using prototypal inheritance!!!'
// }
// console.log('me:',me)
// console.log(me.getBio())

// const you = new Person('Sunmi', 'Chang', 50);
// // Person.prototype.getBio = function() {
// //   return 'Testing~';
// // }
// you.__proto__.greeting = function() { // This will affect the Person constructor function's prototype.
//   return 'Hello'
// }
// console.log('you:',you)
// console.log('greeting:',you.greeting())
// console.log(you.__proto__.__proto__.hasOwnProperty('hasOwnProperty'))
// console.log('getBio:',you.getBio())

// const Person = function(firstName, lastName, age, likes = []) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.likes = likes;
// };
// // console.log(Person)
// Person.prototype.getBio = function() {
//   let bio = `${this.firstName} is ${this.age}. The last name of this person is ${this.lastName}.`;

//   this.likes.forEach(like => {
//     bio += ` ${this.firstName} likes ${like.toLowerCase()}.`
//   })

//   return bio;
// }
// // console.log(Person.prototype)
// Person.prototype.setName = function(fullName) {
//   this.firstName = fullName.split(' ')[0];
//   this.lastName = fullName.split(' ')[1];
// }
// // console.log(Person.prototype)