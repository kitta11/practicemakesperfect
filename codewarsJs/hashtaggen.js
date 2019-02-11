const generateHashtag = (str) => {
  if (str.trim().length === 0) {
    return false
  } else {
    let noWhiteSpace = str.split(' ').filter(word => word.trim().length > 0)
    let hashstring = '#' + noWhiteSpace.map(word => word[0].toUpperCase() + word.substring(1)).join('')
    if (hashstring.length > 140) {
      return false
    } else {
      return hashstring
    }

  }
}

console.log(generateHashtag("code" + " ".repeat(140) + "wars"))

const teststring = "code" + " ".repeat(140) + "wars"
