// const gcd = (x, y) => {
//   x = Math.abs(x);
//   y = Math.abs(y);

//   while (y) {
//     let t = y;
//     y = x % y;
//     x = t;
//   }
//   return x;
// }

function gcd(a, b) {
  var R;
  while ((a % b) > 0) {
    R = a % b;
    a = b;
    b = R;
  }
  return b;
}

// const steinGcd = (x, y) => {
//   if (a === 0) {
//     return b;
//   }
//   else if (b === 0) {
//     return a;
//   }
//   let k = 0;

//   while (((a | b) & 1) == 0) {
//     a = a >> 1
//     b = b >> 1
//     k = k + 1
//   }



// }

// Repeat steps 3–5 until a = b, or until a = 0. In either case, the GCD is power(2, k) * b, where power(2, k) is 2 raise to the power of k and k is the number of common factors of 2 found in step 2.

const recursiveGcd = (x, y) => {
  if (!y) {
    return x;
  }
  return recursiveGcd(y, x % y);
}

function properFractions(n) {
  let fractions = [];
  for (let i = 1; i < n; i++) {
    if (gcd(i, n) === 1) {
      fractions.push(i)
    }
  }
  return fractions.length;
}

console.time('properFractions')

properFractions(9999999999);

console.timeEnd('properFractions')

// console.log(properFractions(6637344));
// // console.log(gcd(12, 15));