import primeNumbersLessThan from "@/utils/primeNumberLessThan";

export default function handle(req: any, res: any) {
  // Start timer
  const start = performance.now();

  // 'k' is the input number requested from frontend
  const { k }: { k: number } = req.query;

  // prime Numbers Less Than (k) => return an array of numbers, with the positivie prime numbers
  const primeNumbersLessThanK = primeNumbersLessThan(k);
  const end = performance.now();

  // End timer
  const timer = end - start;

  // Send response
  res.status(200).send({ k, primeNumbersLessThanK, timer });
}