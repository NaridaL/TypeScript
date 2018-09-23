//// [ambientInsideNonAmbient.ts]
module M {
    export declare var x;
    export declare function f();
    export declare class C { }
    export declare enum E { }
    export declare module M { }
}

module M2 {
    declare var x;
    declare function f();
    declare class C { }
    declare enum E { }
    declare module M { }
}

//// [ambientInsideNonAmbient.js]
var M = M || (M = {});
(function (M) {
})(M);
var M2 = M2 || (M2 = {});
(function (M2) {
})(M2);
