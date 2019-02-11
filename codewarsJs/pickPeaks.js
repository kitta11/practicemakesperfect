function pickPeaks(arr) {
  pos = []
  peaks = []

  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
      pos.push(i)
      peaks.push(arr[i])
    } else if ((arr[i] > arr[i - 1] && arr[i] === arr[i + 1])) {
      pos.push(i)
      peaks.push(arr[i])
      while (arr[i] === arr[i + 1]) {

        i++
      }
      if (arr[i + 1] > arr[i] || i === arr.length - 1) {
        pos.pop()
        peaks.pop()
      }
    }

  }

  return { pos: pos, peaks: peaks }
}

console.log(pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 2, 2]))