function answer(employee) {
  let employee_id;

  let max = 0;
  for (let i = 0; i < employee.length; i++) {
    if (employee[i] > max) {
      max = employee[i];
      employee_id = i + 1;
    }
  }

  return employee_id;
}

let input = [[3, 7, 9, 6, 1]];
for (let i = 0; i < input.length; i++) {
  console.log(answer(input[i]));
}
