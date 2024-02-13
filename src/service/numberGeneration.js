export function generateInteger() {
  return Math.round(Math.random() * Number.MAX_SAFE_INTEGER);
}

export function generateFromRange(range, shift) {
  return (generateInteger() % range) + shift;
}
