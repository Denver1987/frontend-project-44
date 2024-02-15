export function gcdEuclid(number1, number2) {
  let remainder;
  while (number2 !== 0) {
    remainder = number1 % number2;
    number1 = number2;
    number2 = remainder;
  }
  return number1;
}
