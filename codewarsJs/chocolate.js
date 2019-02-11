function breakChocolate(n, m) {
  if (n === 1 && m === 1) {
    return 0;
  } else if (n === 0 || m === 0) {
    return 0
  } else {
    return (n * m) - 1
  }
}

function breakChocolateAdvanced(n, m) {
  {
    return (n * m === 0) ? 0 : n * m - 1;
  };
}