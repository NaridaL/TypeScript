//// [esnextmodulekindWithES5Target5.ts]
export enum E1 {
    value1
}

export const enum E2 {
    value1
}

//// [esnextmodulekindWithES5Target5.js]
export var E1 = {};
export { E1 };
(function (E1) {
    E1[E1["value1"] = 0] = "value1";
})(E1);
export var E2 = {};
export { E2 };
(function (E2) {
    E2[E2["value1"] = 0] = "value1";
})(E2);
