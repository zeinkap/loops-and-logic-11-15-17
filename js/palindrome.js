// this program checks wether a word is a palindrome or not

function checkForPalindrome(str) {
    var user = prompt("Enter a word to determine whether it is a palindrome or not.");
    str = user.toLowerCase();
    var tester = str;
    tester = tester.split(""); // split method converts a string to an array
    tester = tester.reverse(); // reverse method, reverses array positions
    tester = tester.join(""); // join method converts array to a string
    if (tester == str) {
    alert("Yes! its a palindrome.");
    } else {
    alert("Nope, not a palindrome.");
    }
}

var trigger = document.querySelector("#trigger");
trigger.addEventListener('click', checkForPalindrome);

// Doing it via using an anonymous function:
// var trigger = document.querySelector("#trigger");
// trigger.addEventListener('click', function(str) {
//     var user = prompt("Enter a word and I will tell you whether it is a palindrome or not");
//     str = user.toLowerCase();
//     var tester = str;
//     tester = tester.split(""); // split method converts a string to an array
//     tester = tester.reverse(); // reverse method, reverses array positions
//     tester = tester.join(""); // join method converts array to a string
//
//     if (tester == str) {
//       alert("Yes, it is a palindrome");
//     } else {
//       alert("Nope, not a palindrome");
//     }
// });
