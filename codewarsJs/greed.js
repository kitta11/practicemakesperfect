const triplet = (value) => {
  switch (value) {
    case '1':
      return 1000
    case '2':
      return 200
    case '3':
      return 300
    case '4':
      return 400
    case '5':
      return 500
    case '6':
      return 600

    default:
      break;
  }

}

const score = (dice) => {
  let score = 0
  let scoredict = {}
  dice.forEach(element => {
    if (element in scoredict) {
      scoredict[element] += 1
    } else {
      scoredict[element] = 1
    }
  });


  for (key of Object.keys(scoredict)) {
    if (key === '1') {
      if ((scoredict)[key] >= 3) {
        score += triplet(key) + 100 * ((scoredict)[key] - 3)
      } else {
        score += 100 * ((scoredict)[key])
      }
    } else if (key === '5') {
      if ((scoredict)[key] >= 3) {
        score += triplet(key) + 50 * ((scoredict)[key] - 3)
      } else {
        score += 50 * ((scoredict)[key])
      }
    } else if (scoredict[key] >= 3) {
      score += triplet(key)
    }
  }

  return score
}

function scorePro(dice) {
  var dc = [0, 0, 0, 0, 0, 0];
  var tdr = [1000, 200, 300, 400, 500, 600];
  var sdr = [100, 0, 0, 0, 50, 0];
  dice.forEach(function (x) {
    dc[x - 1]++;
  });
  return dc.reduce(function (s, x, i) {
    console.log(s, x, i)
    return s + (x >= 3 ? tdr[i] : 0) + sdr[i] * (x % 3);
  }, 0);
}

console.log(scorePro([1, 1, 1, 5, 5]))
// console.log(triplet(2))

// scoring rules:
// Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point