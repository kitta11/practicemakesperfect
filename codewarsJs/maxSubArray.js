function maxSequence(arr) {
  if (arr.length === 0) {
    return 0
  }
  if (arr.filter(item => item < 0).length === arr.length) {
    return 0
  }

  let max_ending_here = arr[0]
  let max_so_far = 0
  for (let x of arr.slice(1)) {
    console.log('originmaxend:', max_ending_here)
    console.log('comparemaxends:', x, max_ending_here + x)
    max_ending_here = Math.max(x, max_ending_here + x)
    console.log('aftermaxend', max_ending_here)
    console.log('originmaxsofar', max_so_far)
    console.log('comparemaxsofar', max_so_far, max_ending_here)
    max_so_far = Math.max(max_so_far, max_ending_here)
    console.log('aftermaxsofar', max_so_far)
    console.log('/////////////')
  }
  return max_so_far
}



function maxSequenceAdvanced(arr) {
  let min = 0, ans = 0, i, sum = 0;
  for (i = 0; i < arr.length; ++i) {
    sum += arr[i];
    console.log('sum', sum)
    min = Math.min(sum, min);
    console.log('min', min)
    ans = Math.max(ans, sum - min);
    console.log('ans', ans)
    console.log('/////////////')
  }
  return ans;
}

maxSequenceAdvanced([-2, 1, -3, 4, -1, 2, 1, -5, 4])


