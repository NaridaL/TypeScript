//// [extBaseClass2.ts]
module N {
    export class C4 extends M.B {
    }
}

module M {
    export class C5 extends B {
    }
}


//// [extBaseClass2.js]
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var N = N || (N = {});
(function (N) {
    var C4 = /** @class */ (function (_super) {
        __extends(C4, _super);
        function C4() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return C4;
    }(M.B));
    N.C4 = C4;
})(N);
var M = M || (M = {});
(function (M) {
    var C5 = /** @class */ (function (_super) {
        __extends(C5, _super);
        function C5() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return C5;
    }(B));
    M.C5 = C5;
})(M);
