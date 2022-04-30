// 1. Which Generation Are You?
// Try finding your ancestors and offspring with code.
// Create a function that takes a number x and a character y ("m" for male,
// "f" for female), and returns the name of an ancestor (m/f) or descendant (m/f).
// ● If the number is negative, return the related ancestor.
// ● If positive, return the related descendant.
// ● You are generation 0. In the case of 0 (male or female), return "me!".

const generation = {
  "-3": ["great grandfather", "great grandmother"],
  "-2": ["grandfather", "grandmother"],
  "-1": ["father", "mother"],
  0: ["me!", "me!"],
  1: ["son", "daughter"],
  2: ["grandson", "granddaughter"],
  3: ["great grandson", "great granddaughter"],
};
function findGen(number, gender) {
  if (gender == "m") return generation[number][0];
  else if (gender == "f") return generation[number][1];
  else return "Error : Invalid Input!";
}
console.log("********Question 1*********");
console.log(findGen(2, "f")); //granddaughter
console.log(findGen(-3, "m")); //great grandfather
console.log(findGen(1, "f")); //daughter
console.log(findGen(0, "f")); //me!
console.log(findGen(50, "h")); //Error : Invalid Input!
