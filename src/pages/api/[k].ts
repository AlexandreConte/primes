import primeNumbersLessThan from "@/utils/primeNumberLessThan";

export default function handle(req: any, res: any) {
  const start = performance.now();
  const { k }: { k: number } = req.query;
  const primeNumbersLessThanK = primeNumbersLessThan(k);
  const end = performance.now();
  const timer = end - start;
  res.status(200).send({ k, primeNumbersLessThanK, timer });
}