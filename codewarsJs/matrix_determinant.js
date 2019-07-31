
const testMatrix0 = [];
const testMatrix1 = [[1]];
const testMatrix2 = [
  [1, 7],
  [1, 1]
]
const testMatrix3 = [
  [2, 5, 4],
  [3, 1, 7],
  [4, 1, 1]
]
const testMatrix4 = [
  [2, 5, 4, 6],
  [3, 1, 7, 2],
  [4, 1, 1, 5],
  [3, 6, 8, 7],
]

const sliceSubset = (array, indexToDeleted) => {
  let subset = [];
  for (let i = 1; i < array.length; i++) {
    subset.push(array[i].slice(0, indexToDeleted));
    subset[i - 1] = subset[i - 1].concat(array[i].slice(indexToDeleted + 1));

  }
  return subset;
}

function determinant(m) {
  let determinantValue = 0;
  if (m.length === 0) {
    return
  } else if (m.length === 1 && m[0].length === 1) {
    return m[0][0];
  } else if (m.length === 2 && m[0].length === 2 && m[1].length === 2) {
    return m[0][0] * m[1][1] - m[0][1] * m[1][0]
  } else {
    for (let j = 0; j < m.length; j++) {
      determinantValue += Math.pow(-1, j) * m[0][j] * determinant(sliceSubset(m, j))
    }

  }
  return determinantValue
};

// console.log(determinant(testMatrix0));
// console.log(determinant(testMatrix1));
// console.log(determinant(testMatrix2));
// console.log(determinant(testMatrix3));

// [2, 5, 4, 6],
// [3, 1, 7, 2],
// [4, 1, 1, 5],
// [3, 6, 8, 7],

function determinantPro(m) {
  if (m.length == 0) return 0;
  if (m.length == 1) return m[0][0];
  if (m.length == 2) return m[0][0] * m[1][1] - m[0][1] * m[1][0];
  if (m.length > 2) {
    return m.reduce((acc, curr, i, arr) => {
      let miniArr = arr.slice(0, i).concat(arr.slice(i + 1)).map(item => item.slice(1));
      console.log(i, curr, acc, '||', miniArr);
      return acc + (i % 2 == 0 ? 1 : -1) * curr[0] * determinantPro(miniArr);
    }, 0);
  }
};

console.log(determinantPro(testMatrix4));
