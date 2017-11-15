// for (var i = 0; i <= 100; i++) {
//   console.log([i]);
//   if (i === 0) {
//     console.log(i);
//   } else if (i % 3 === 0 && i % 5 === 0) {
//     console.log("fizzbuzz");
//   } else if (i % 3 === 0) {
//     console.log('fizz');
//   } else if (i % 5 === 0) {
//     console.log("buzz");
//   } else if (i % 5 !== 0 || i % 5 !== 0) {
//     console.log(i);
//   }
// }



// without using the operators and or
// for (var i = 0; i <= 100; i++) {
//   console.log([i]);
//   if (i % 3 === 0) if (i % 5 === 0) {
//     console.log("fizzbuzz");
//   } else if (i % 3 === 0) {
//     console.log('fizz');
//   } else if (i % 5 === 0) {
//     console.log("buzz");
//   } if (i % 5 !== 0) if (i % 5 !== 0) {
//     console.log(i);
//   }
// }

// create array and reverse it
var cereals = ["special K", "coco puffs", "honey nut", "lucky charm", "fruit loops"];

function reverse(cereal) {
  var backwards = []
  var counter = 0;
  for (var i = cereal.length-1; i >= 0; i--) {
    backwards[counter] = cereal[i];
    counter++;
  }
  return backwards;
}

console.log(reverse(cereals));
