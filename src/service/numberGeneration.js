export function generateInteger() {
  return Math.round(Math.random() * Number.MAX_SAFE_INTEGER);
}

export function generateFromRange(range, shift = 0) {
  return (generateInteger() % (range + 1)) + shift;
}
