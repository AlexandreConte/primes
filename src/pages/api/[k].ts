import primeNumbersLessThan from "@/utils/primeNumberLessThan";

export default function handle(req: any, res: any) {
  const { k }: { k: number } = req.query;
  const obj = {
    k,
    primeNumbersLessThanK: primeNumbersLessThan(k)
  };
  res.status(200).send(obj);
}