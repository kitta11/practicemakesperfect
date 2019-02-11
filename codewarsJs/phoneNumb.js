function createPhoneNumber(numbers) {
  return `(${numbers.slice(0, 3).join('')
    }) ${numbers.slice(3, 6).join('')}-${numbers.slice(-4).join('')}`
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
// (123) 456-7890


function createPhoneNumberRegexp(numbers) {
  return numbers.join('').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
}