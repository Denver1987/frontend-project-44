/**
 * Генерирует случайное число от 0 до 9007199254740990
 * @returns {number}
 */
export function generateInteger() {
  return Math.round(Math.random() * Number.MAX_SAFE_INTEGER);
}

/**
 * Генерирует случайное число из указанного диапазона
 * @param {number} start - начало диапазона
 * @param {number} end - конец диапазона
 * @returns {number}
 */
export function generateFromRange(start, end) {
  return (generateInteger() % ((end - start) + 1)) + start;
}
