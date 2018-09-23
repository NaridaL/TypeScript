//// [cloduleWithRecursiveReference.ts]
module M
{
  export class C {  }
  export module C {
    export var C = M.C
  }
}

//// [cloduleWithRecursiveReference.js]
var M = M || (M = {});
(function (M) {
    var C = /** @class */ (function () {
        function C() {
        }
        return C;
    }());
    M.C = C;
    (function (C_1) {
        C_1.C = M.C;
    })(C);
})(M);
