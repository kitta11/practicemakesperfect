function number(busStops) {
  let peopleOnTheBus = 0
  for (stop of busStops) {
    peopleOnTheBus += stop[0] - stop[1]
  }
  return peopleOnTheBus
}

const numberAdvanced = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);

console.log(number([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]]))