function getCount(n) {
  let evenlyDivide = 0
  for (let i = 0; i < String(n).length; i++) {
    for (let j = i + 1; j < String(n).length + 1; j++) {
      if (n % parseInt(String(n).slice(i, j)) === 0) {
        evenlyDivide += 1
      }
    }
  }
  return evenlyDivide - 1

}

console.log(getCount(123))