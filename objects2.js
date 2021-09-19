const person = {
  name: 'Erik',
  age: 41,
  
  // example of functions within objects
  greet() {
    console.log('Hi, I am ' + this.name);
  }
};

const printName = ({name}) => {
  console.log(name);
}
printName(person);

const {name, age } = person;
console.log(name, age);
