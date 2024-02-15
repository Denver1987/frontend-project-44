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

export function findFactors(number) {
  const factors = [];
  let num = number;
  while (num % 2 === 0) {
    factors.push(2);
    num /= 2;
  }

  let i = 3;
  let maxFactor = Math.sqrt(num);
  while (i <= maxFactor) {
    while (num % i === 0) {
      factors.push(i);
      num /= i;
      maxFactor = Math.sqrt(num);
    }
    i += 2;
  }

  if (num > 1) factors.push(num);
  return factors;
}

export function isPrime(number) {
  if (number === 1) return true;
  if (findFactors(number).length === 1) return true;
  return false;
}
