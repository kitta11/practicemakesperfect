const sumIntervals = (intervals) => {
  const sortedInterval = intervals.sort((a, b) => a[0] - b[0]);
  let merged = []

  for (item of sortedInterval) {
    if (merged.length === 0) {
      merged.push(item)

    } else {
      let b = merged.pop()
      if (b[1] >= item[0]) {
        if (b[1] > item[1]) {
          new_item = [b[0], b[1]]
        } else {
          new_item = [b[0], item[1]]
        }
        merged.push(new_item)
      } else {

        merged.push(b)
        merged.push(item)
      }
    }
  }
  return merged.map(x => x[1] - x[0]).reduce((a, b) => a + b)
}

console.log(sumIntervals([
  [1, 2],
  [6, 10],
  [11, 15]
]))

console.log(sumIntervals([
  [1, 5],
  [10, 20],
  [1, 6],
  [16, 19],
  [5, 11]
]))

console.log(sumIntervals([
  [1, 4],
  [7, 10],
  [3, 5]
]))