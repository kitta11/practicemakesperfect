function pathFinder(maze) {
  return true;
}

testMaze1 = `.W.
.W.
W..`

console.log(testMaze1.split('\n'));

let newMaze = [];

testMaze1.split('\n').forEach(row => {
  newMaze.push(row.split(''));
});

console.log(newMaze)