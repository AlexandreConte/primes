export default function primeNumbersLessThan(k: number) {
  const primesLess: number[] = [];

  for (let i = 2; i < k; i++) {
    if (isPrimeNumber(i)) {
      primesLess.push(i);
    }
  }

  return primesLess;
}

function isPrimeNumber(number: number) {
  let count = 0;
  for (let i = 2; i * i <= number; i++) {
    if (number % i === 0) {
      count++;
      break;
    }
  }
  return count === 0;
}