
const phi = (1 + Math.sqrt(5)) / 2
console.log(phi)

const estimatingTheNthFibonacci = (n) => {
  return Math.pow(phi, n) / Math.sqrt(5)
}

const fibonacci = (num) => {
  if (num <= 1) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
}

const estimatingN = (product) => {
  return (Math.log(product) + Math.log(5) / 2) / Math.log(phi)
}

function productFib(prod) {

  let ans = null;

  let i = 0
  let FibI = fibonacci(i)
  let FibINext = fibonacci(i + 1)

  while (FibI * FibINext < prod) {
    i += 1
    FibI = fibonacci(i)
    FibINext = fibonacci(i + 1)
  }

  if (prod / FibI === FibINext) {
    ans = [FibI, FibINext, true]
  } else {
    ans = [FibI, FibINext, false]
  }

  return ans
}



console.log(productFib(84049690))


function productFibPro(prod) {
  let [a, b] = [0, 1];
  while (a * b < prod) [a, b] = [b, a + b];
  return [a, b, a * b === prod];
}