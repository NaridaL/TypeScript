//// [arraySort.ts]
const strArr: string[] = ["a", "b", "c"].sort(); // ok
const strArr2: string[] = ["a", "b", "c"].sort((a, b) => a.localeCompare(b)); // ok
const numArr: number[] = [3, 2, 1].sort(); // error: missing comparator
const numArr2: number[] = [3, 2, 1].sort((a, b) => a - b); // ok
const numArr3: number[] = [3, 2, 1].sort((a, b) => "" + a < "" + b ? -1 : "" + a > "" + b ? 1 : 0); // ok: default behavior

//// [arraySort.js]
var strArr = ["a", "b", "c"].sort(); // ok
var strArr2 = ["a", "b", "c"].sort(function (a, b) { return a.localeCompare(b); }); // ok
var numArr = [3, 2, 1].sort(); // error: missing comparator
var numArr2 = [3, 2, 1].sort(function (a, b) { return a - b; }); // ok
var numArr3 = [3, 2, 1].sort(function (a, b) { return "" + a < "" + b ? -1 : "" + a > "" + b ? 1 : 0; }); // ok: default behavior
