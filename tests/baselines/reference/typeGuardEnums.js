//// [typeGuardEnums.ts]
enum E {}
enum V {}

let x: number|string|E|V;

if (typeof x === "number") {
    x; // number|E|V
}
else {
    x; // string
}

if (typeof x !== "number") {
    x; // string
}
else {
    x; // number|E|V
}


//// [typeGuardEnums.js]
var E = E || (E = {});
(function (E) {
})(E);
var V = V || (V = {});
(function (V) {
})(V);
var x;
if (typeof x === "number") {
    x; // number|E|V
}
else {
    x; // string
}
if (typeof x !== "number") {
    x; // string
}
else {
    x; // number|E|V
}
