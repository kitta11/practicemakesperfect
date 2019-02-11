function firstNonRepeatingLetter(s) {
  let letterDict = {}
  for (letter of s) {
    console.log(letterDict)
    if (letter in letterDict) {
      letterDict[letter] += 1
    } else if (letter.toLowerCase() in letterDict) {
      letterDict[letter.toLowerCase()] += 1
    } else if (letter.toUpperCase() in letterDict) {
      letterDict[letter.toUpperCase()] += 1
    } else {
      letterDict[letter] = 1
    }
  }
  if (Object.keys(letterDict).filter(key => letterDict[key] === 1)[0]) {
    return Object.keys(letterDict).filter(key => letterDict[key] === 1)[0]
  } else {
    return ''
  }

}


function firstNonRepeatingLetterRegExp(s) {
  for (let i in s) {
    console.log(s.match(new RegExp(s[i], "gi")))
    // i is responsible for the case sensitivity
    if (s.match(new RegExp(s[i], "gi")).length === 1) {
      return s[i];
    }
  }
  return '';
}

console.log(firstNonRepeatingLetterRegExp('humumanan'))
