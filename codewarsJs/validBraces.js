const validBraces = (braces) => {
  if (braces.length <= 1)
    return false

  let matchingOpeningBracket, ch
  let stack = []
  let openingBrackets = ['[', '{', '(']
  let closingBrackets = [']', '}', ')']


  for (let i = 0; i < braces.length; i++) {
    ch = braces[i]

    if (closingBrackets.indexOf(ch) > -1) {
      matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(ch)]
      if (stack.length === 0 || stack.pop() !== matchingOpeningBracket) {
        return false
      }
    } else {
      stack.push(ch)
    }
  }
  return stack.length === 0


}

// console.log(validBraces("[(])"))
// console.log(validBraces("(){}[]"))

function validBracesPro(braces) {
  while (braces.indexOf("{}") != -1 || braces.indexOf("()") != -1 || braces.indexOf("[]") != -1) {
    console.log(braces)
    braces = braces.replace("{}", "").replace("()", "").replace("[]", "");
  }
  return braces.length == 0;
}

console.log(validBracesPro("(({}){[]}[])"))