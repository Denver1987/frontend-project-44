export function gcdEuclid(number1, number2) {
  let a = number1;
  let b = number2;
  let remainder;
  while (b !== 0) {
    remainder = a % b;
    a = b;
    b = remainder;
  }
  return a;
}

export function isPrime(number) {
  console.log(number);
}
