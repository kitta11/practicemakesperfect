function findShort(s) {
  console.log((s.split(" ").map(s => s.length)))
  console.log(...[7, 4, 4, 3, 5, 5, 3, 5, 7])
  let shortestLength = s.split(' ')[0].length
  s.split(' ').forEach(word => {
    if (word.length < shortestLength) {
      shortestLength = word.length
    }
  });
  return shortestLength
}


console.log(findShort("bitcoin take over the world maybe who knows perhaps"))

function findShortMap(s) {
  // return Math.min.apply(null, s.split(' ').map(w => w.length));
  return Math.min(...s.split(" ").map(s => s.length));
}

