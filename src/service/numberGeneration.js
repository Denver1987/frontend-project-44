export function generateInteger() {
  return Math.round(Math.random() * Number.MAX_SAFE_INTEGER);
}

export function generateFromRange(start, end) {
  return (generateInteger() % ((end - start) + 1)) + start;
}
