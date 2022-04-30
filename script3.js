// 3.Lowercase and Uppercase Map
// Write a function that creates an object with each
// (key, value) pair being the (lower case, upper case) versions of a letter, respectively.
// Notes
// All of the letters in the input list will always be lowercase

function mapping(letters) {
  return Object.fromEntries(
    letters.map((letter) => [letter.toLowerCase(), letter.toUpperCase()])
  );
}
console.log("********Question 3*********");
console.log(mapping(["p", "s"])); //{ "p": "P", "s": "S" }
console.log(mapping(["a", "b", "c"])); //{ "a": "A", "b": "B", "c": "C" }
console.log(mapping(["a", "v", "y", "z"])); // { "a": "A", "v": "V", "y": "Y", "z": "Z" }
