//// [mergedEnumDeclarationCodeGen.ts]
enum E {
    a,
    b = a
}
enum E {
    c = a
}

//// [mergedEnumDeclarationCodeGen.js]
var E = E || (E = {});
(function (E) {
    E[E["a"] = 0] = "a";
    E[E["b"] = 0] = "b";
})(E);
(function (E) {
    E[E["c"] = 0] = "c";
})(E);
