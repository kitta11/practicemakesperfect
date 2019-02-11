
// function oddOrEven(array) {
//   if (array.length === 0) {
//     return 'even'
//   } else if (array.reduce((a, b) => a + b) % 2 === 0) {
//     return 'even'
//   } else {
//     return 'odd'
//   }
// }

function oddOrEven(array) {
  return array.reduce((a, b) => a + b, 0) % 2 ? 'odd' : 'even'
}

console.log(oddOrEven([2, 5, 34, 6]))
console.log(oddOrEven([0]))
console.log(oddOrEven([1]))
console.log(oddOrEven([]))
