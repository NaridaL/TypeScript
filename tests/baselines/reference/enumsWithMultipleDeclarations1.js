//// [enumsWithMultipleDeclarations1.ts]
enum E {
  A
}

enum E {
  B
}

enum E {
  C
}

//// [enumsWithMultipleDeclarations1.js]
var E = E || (E = {});
(function (E) {
    E[E["A"] = 0] = "A";
})(E);
(function (E) {
    E[E["B"] = 0] = "B";
})(E);
(function (E) {
    E[E["C"] = 0] = "C";
})(E);
