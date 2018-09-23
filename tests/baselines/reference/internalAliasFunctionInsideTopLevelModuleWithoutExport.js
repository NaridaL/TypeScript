//// [internalAliasFunctionInsideTopLevelModuleWithoutExport.ts]
export module a {
    export function foo(x: number) {
        return x;
    }
}

import b = a.foo;
export var bVal = b(10);
export var bVal2 = b;


//// [internalAliasFunctionInsideTopLevelModuleWithoutExport.js]
"use strict";
exports.__esModule = true;
var a = {};
(function (a) {
    function foo(x) {
        return x;
    }
    a.foo = foo;
})(a);
var b = a.foo;
exports.bVal = b(10);
exports.bVal2 = b;


//// [internalAliasFunctionInsideTopLevelModuleWithoutExport.d.ts]
export declare module a {
    function foo(x: number): number;
}
import b = a.foo;
export declare var bVal: number;
export declare var bVal2: typeof b;
