// 4.Return the Most Expensive Piece of Jewellery
// You go to a jewelry shop and try to find the most expensive piece
//of jewelry. You write down the name of each piece of jewelry and its price.
// Create a function that gets the name of the piece of jewelry with the highest pr
// ice and returns "The most expensive one is the {name of jewelry piece}".
// Notes
// ● There will always be at least one item in the object.
// ● There will always be only one highest priced item (i.e. there will not be two
// items with the joint highest value).

function mostExpensive(jewelries) {
  const largest = Object.values(jewelries).reduce(
    (a, b) => Math.max(a, b),
    -Infinity
  );
  return (
    "The most expensive one is the " +
    Object.keys(jewelries).find((key) => jewelries[key] === largest)
  );
}
console.log("********Question 4*********");
console.log(
  mostExpensive({
    "Diamond Earrings": 980,
    "Gold Watch": 250,
    "Pearl Necklace": 4650,
  })
); //➞ "The most expensive one is the Pearl Necklace"
console.log(
  mostExpensive({
    "Silver Bracelet": 280,
    "Gemstone Earrings": 180,
    "Diamond Ring": 3500,
  })
); //"The most expensive one is the Diamond Ring"
