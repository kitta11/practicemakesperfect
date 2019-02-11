
const allDigitSame = (number) => {
  return (String(number).length === String(number).split('').filter(num => num === String(number)[0]).length)
}

const followedByZeros = (number) => {
  return String(number)[0] > 0 && String(number).split('').filter(num => num === '0').length === String(number).length - 1
}

const isSequentialInc = (number) => {
  let numArray = (number).toString().split("").map(num => parseInt(num))
  let diffArray = []
  for (let i = 0; i < numArray.length - 1; i++) {
    if (numArray[i + 1] === 0 && numArray[i] === 9) {
      diffArray.push(1)
    } else {
      diffArray.push(numArray[i + 1] - numArray[i])
    }
  }
  return diffArray.filter(num => num === 1).length === numArray.length - 1
}

const isSequentialDec = (number) => {

  let numArray = (number).toString().split("").map(num => parseInt(num))
  let diffArray = []
  for (let i = 0; i < numArray.length - 1; i++) {
    diffArray.push(numArray[i] - numArray[i + 1])
  }
  return diffArray.filter(num => num === 1).length === numArray.length - 1

}

const isPalindrome = (number) => {
  let tempArray = (number).toString().split("")
  let index = tempArray.length
  while (index > 0) {
    if (tempArray[0] === tempArray[index - 1]) {
      tempArray = tempArray.slice(1, -1)
      index = tempArray.length
    } else {
      break
    }
  }
  return tempArray.length <= 1
}

const isInteresting = (number, awesomePhrases) => {
  if (String(number + 2).length < 3) {
    return 0
  } else if (
    String(number).length >= 3 &&
    (isPalindrome(number) ||
      followedByZeros(number) ||
      isSequentialInc(number) ||
      isSequentialDec(number) ||
      allDigitSame(number) ||
      awesomePhrases.includes(number))
  ) {
    return 2
  } else if (
    String(number + 2).length >= 3 &&
    (isPalindrome(number + 2) ||
      followedByZeros(number + 2) ||
      isSequentialInc(number + 2) ||
      isSequentialDec(number + 2) ||
      allDigitSame(number + 2) ||
      awesomePhrases.includes(number + 2))
  ) {
    return 1

  } else if (
    String(number + 1).length >= 3 &&
    (isPalindrome(number + 1) ||
      followedByZeros(number + 1) ||
      isSequentialInc(number + 1) ||
      isSequentialDec(number + 1) ||
      allDigitSame(number + 1) ||
      awesomePhrases.includes(number + 1))
  ) {
    return 1
  } else {
    return 0
  }
}



console.log(isInteresting(98, []))


// Any digit followed by all zeros: 100, 90000 DONE
// Every digit is the same number: 1111 DONE
// The digits are sequential, incementing†: 1234 DONE
// The digits are sequential, decrementing‡: 4321 DONE
// The digits are a palindrome: 1221 or 73837 DONE
// The digits match one of the values in the awesomePhrases array