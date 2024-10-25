// function that counts the occurrences of each character in a string
export function countCharacters(str) {
  var charMap = {};
  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }
  return charMap;
}

var str = "hello";
console.log(countCharacters(str)); // { h: 1, e: 1, l: 2, o: 1 }
