const myName = 'Erik';
let age = 41;
const hasHobbies = false;

/*
function summarizeUser(userName, userAge, userHasHobby) {
  return ('Name is ' + 
  userName + 
  ', age is ' + 
  userAge + 
  " and the user has hobbies: " 
  + userHasHobby);
}
*/
const summarizeUser = (userName, userAge, userHasHobby) => {
  return ('Name is ' + 
  userName + 
  ', age is ' + 
  userAge + 
  " and the user has hobbies: " 
  + userHasHobby);
}

const add = (a, b) => {
  return a + b;
};
console.log(add(3,6));

console.log(summarizeUser(myName, age, hasHobbies));

