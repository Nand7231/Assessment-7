//1}// probs like 1 ms similar to number 2 in the sense that it is checking each possible combonation to see if they add to 0.
function addToZero(arr, num) {
    let obj = {}
    let addition
  
    for (let i = 0; i < arr.length; i++) {
      addition = num - arr[i]
  
      if (obj[addition]) {
        return true
      } else {
        obj[arr[i]] = true
      }
    }
    return false
  }
  
  let result = addToZero([6, 4, -2, 2], 0)

  console.log(result)

//2 probs like 2ms seems simple enough but a big long because its taking each letter in the string and checking the other letters in the string so see if they match.
  function hasUniqueChars(string) {
    let obj = {};
    for (let i = 0; i< string.length; i++) {
        let unique = string[i];
        if (obj[unique]) return false;
        obj[unique] = true;
    }
    return true;


  }

  let uniqueAnswer = hasUniqueChars("monday")

  console.log(uniqueAnswer)


//3 probs like 4 ms this is the longest one in my opinion because the function first has to split alphabet into seperate strings. then check the string to see if it contains each letter by itterating each one.
function isPangram(string) {
  let stringArray = string.toLowerCase();
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  for (let i = 0; i < alphabet.length; i++) {
    if (stringArray.indexOf(alphabet[i]) < 0) {
        return false;
    }
  }
  return true;
}


let pangramAnswer = isPangram("the quick brown fox jumps over the lazy dog")
console.log(pangramAnswer)


//5 probs like 3ms because the function has to iterate every string length and compare it to each one it will take a bit of time.
function findLongestString(arr) {
    let word = "";
    for (let i = 0; i < arr.length; i++) {
      if (word.length < arr[i].length) {
        word = arr[i];
      }
    }
    return word;
  }
let longestStringAnswer = findLongestString(["hello", "coolest", "pineapples"]);
console.log(longestStringAnswer)
