
const anagrams = (word, words) => {
  return words.filter(x => x.split('').sort().join('') === word.split('').sort().join(''))
}

console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']))
console.log(anagrams('abba', ['baba', 'abcd']))






