const xAxis = { 'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8 };
const visitedMatrix = {};
for (let i = 1; i < 9; i++) {
  for (let j = 1; j < 9; j++) {
    visitedMatrix[`${i}${j}`] = false;
  }
}



const isInsideTheBoard = (x, y) => {
  if (x >= 1 && x <= 8 && y >= 1 && y <= 8) {
    return true
  }
  return false
}

function knight(start, finish) {
  const dX = [2, 2, -2, -2, 1, 1, -1, -1];
  const dY = [1, -1, 1, -1, 2, -2, 2, -2];
  let queue = [];


  let startX = xAxis[start.split('')[0]];
  let startY = parseInt((start.split('')[1]))
  let targetX = xAxis[finish.split('')[0]];
  let targetY = parseInt((finish.split('')[1]))

  queue.push([startX, startY, 0]);
  visitedMatrix[`${startX}${startY}`] = true;

  let t = []

  while (queue.length > 0) {
    t = queue[0];
    queue.shift();

    if (t[0] === targetX && t[1] === targetY) {
      console.log(typeof (t[2]));
      for (let i = 1; i < 9; i++) {
        for (let j = 1; j < 9; j++) {
          visitedMatrix[`${i}${j}`] = false;
        }
      }
      return t[2];
    }

    for (let i = 0; i < 8; i++) {
      nextX = t[0] + dX[i]
      nextY = t[1] + dY[i]

      if (isInsideTheBoard(nextX, nextY) && !visitedMatrix[`${nextX}${nextY}`]) {
        visitedMatrix[`${nextX}${nextY}`] = true
        queue.push([nextX, nextY, t[2] + 1])
      }
    }
  }
}

let arr = [['a1', 'f1', 3], ['a1', 'c1', 2], ['a1', 'f3', 3], ['a1', 'f4', 4], ['a1', 'f7', 5]];

arr.forEach(element => {
  console.log(knight(element[0], element[1]));
});