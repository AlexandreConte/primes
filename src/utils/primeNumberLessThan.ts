// @return a list of every prime positive number under 'k'
export default function primeNumbersLessThan(k: number) {
  const primesLess: number[] = [];

  for (let i = 2; i < k; i++) {
    if (isPrimeNumber(i)) {
      primesLess.push(i);
    }
  }

  return primesLess;
}

// isPrimeNumber(number) => @return boolean
// @true if the number is prime
// @false if the number isn't prime
function isPrimeNumber(k: number) {
  let count = 0;
  for (let i = 2; i * i <= k; i++) {
    if (k % i === 0) {
      // if the number is divisible, than return false
      return false
    }
  }
  // If no number under 'k' is divisible, than it's a prime number
  return true;
}