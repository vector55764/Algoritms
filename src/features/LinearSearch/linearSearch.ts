export const randomInt = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const generateRandomArray = (
  length: number = 10,
  min: number = 500,
  max: number = 500
): number[] => Array.from({ length }, () => randomInt(min, max));

export const linearSearch = (arr: number[], target: number): number => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
};
