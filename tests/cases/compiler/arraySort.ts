const strArr: string[] = ["a", "b", "c"].sort(); // ok
const strArr2: string[] = ["a", "b", "c"].sort((a, b) => a.localeCompare(b)); // ok
const numArr: number[] = [3, 2, 1].sort(); // error: missing comparator
const numArr2: number[] = [3, 2, 1].sort((a, b) => a - b); // ok
const numArr3: number[] = [3, 2, 1].sort((a, b) => "" + a < "" + b ? -1 : "" + a > "" + b ? 1 : 0); // ok: default behavior