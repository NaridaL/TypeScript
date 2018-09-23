//// [moduleAssignmentCompat1.ts]
module A {
    export class C { }
}
module B {
    export class C { }
    class D { }
}

var a: A;
var b: B;

// no error
a = b;
b = a;



//// [moduleAssignmentCompat1.js]
var A = A || (A = {});
(function (A) {
    var C = /** @class */ (function () {
        function C() {
        }
        return C;
    }());
    A.C = C;
})(A);
var B = B || (B = {});
(function (B) {
    var C = /** @class */ (function () {
        function C() {
        }
        return C;
    }());
    B.C = C;
    var D = /** @class */ (function () {
        function D() {
        }
        return D;
    }());
})(B);
var a;
var b;
// no error
a = b;
b = a;
