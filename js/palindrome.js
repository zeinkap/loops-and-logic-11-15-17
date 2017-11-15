document.write("<div> JavaScript Palindrome exercise</div>")

//lets convert string to an array then apply reverse method
// we will search via google
// turn array back into a string
function checkForPalindrome(str) {
  str = str.toLowerCase();
  var tester = str
  tester = tester.split("")
    // split method converts a string to an array
  tester = tester.reverse();
  // join method converts array to a string
  tester = tester.join("");

  if (tester == str) {
    return true;
  } else {
    return false;
  }
}
console.log(checkForPalindrome('Mom'));

var myArr = [1, 2, 3, 4, 5, 6, 7, 8];
// returns # of elements within array
myArr.length;

// returns the last element within the array
myArr[myArr.length - 1];
