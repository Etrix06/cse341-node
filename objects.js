const person = {
  name: 'Erik',
  age: 41,
  
  // example of functions within objects
  greet() {
    console.log('Hi, I am ' + this.name);
  }
};

person.greet();
//console.log(person);

//arrays
 const hobbies = ['Sports', 'D&D', 'Cooking'];
 for (let hobby of hobbies) {
   console.log(hobby);
 }

 console.log(hobbies.map(hobby => {
   return 'Hobby: ' + hobby;
 }));

 
 //hobbies.push('Programming');

 const copiedArray = hobbies.slice();
 console.log(copiedArray);
 console.log(copiedArray + ' copied array using slice()');

 // spread operator to copy arrays.
 const copiedArray2 = [...hobbies];
 console.log(copiedArray2);

 // rest operators
const toArray = (...args) => {
  return [args];
};
console.log(toArray(1,2,3,4,5));
