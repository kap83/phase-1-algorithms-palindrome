
  // Write your algorithm here
  
  function isPalindrome (word) {
    let c = word
    .split("")
    .reverse("")
    .join("")
    //console.log(word === j)
    return word === c
  }

isPalindrome("")

/* 
  Add your pseudocode here
  takes an string and reverses the order of the letters 
  compares the argument to the reversed version
  returns T or F

  Attempt 1: use split(), reverse(), join() to switch the argument, then console.logs a comparison. 

*/

/*
  Add written explanation of your solution here
  Create a function that tests for a palindrome
  input: a word
  output: true or false

  function should accept 1 string as an argument: lower case, no spaces or special characters
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
