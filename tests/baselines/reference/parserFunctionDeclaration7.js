//// [parserFunctionDeclaration7.ts]
module M {
   function foo();
}

//// [parserFunctionDeclaration7.js]
var M = M || (M = {});
(function (M) {
})(M);
