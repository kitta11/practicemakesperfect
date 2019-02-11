


function isIsogram(str) {
  const strDict = {}
  for (let letter of str.split('')) {
    if (letter.toLowerCase() in strDict) {
      return false
    } else {
      strDict[letter.toLowerCase()] = 1
    }
  }
  return true
}

console.log(isIsogram("Dermatoglyphics"))
console.log(isIsogram("aba"))
console.log(isIsogram("moOse"))

function isIsogram(str){ 
  return !/(\w).*\1/i.test(str)
}