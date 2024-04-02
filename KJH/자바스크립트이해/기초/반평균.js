function answer(score) {
  let average = 0;

  for (let i = 0; i < score.length; i++) {
    average += score[i];
  }
  average /= score.length;

  average = average.toFixed(2);

  return average;
}

let input = [[80, 95, 65, 70, 100]];
for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1} ${answer(input[i])}`);
}
