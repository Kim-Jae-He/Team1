const until_num = 10;

let sum = 0;

for (let i = 0; i <= until_num; i++) {
  if (i % 2 == 0) sum += i;
}

console.log(sum);
