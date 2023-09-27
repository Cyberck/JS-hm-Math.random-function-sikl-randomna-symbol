


let amount = +prompt('Enter the number of examples', '');

function rand(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);

}
 
for (let i = 0; i < amount; i++) {
  let num1 = rand(1,10);
  let num2 = rand(1,10);
  let symbol = rand(1,4);
  let example = 0;
  if (symbol == 1) {
    example = num1 + num2;
    symbol = '+';
  }else if (symbol == 2) {
    example = num1 - num2;
    symbol = '-';
  }else if (symbol == 3) {
    example = num1 * num2;
    symbol = '*';
  }else if (symbol == 4) {
    example = num1 / num2;
    symbol = '/';
  }
  let answer = prompt(num1 + symbol + num2);
  console.log(example == answer ? 'Your answer is correct' : ' Your answer is not correct ' + answer +
 ' Correct answer ' + example);
} 