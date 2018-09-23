//// [internalAliasInitializedModuleInsideTopLevelModuleWithExport.ts]
export module a {
    export module b {
        export class c {
        }
    }
}

export import b = a.b;
export var x: b.c = new b.c();

//// [internalAliasInitializedModuleInsideTopLevelModuleWithExport.js]
"use strict";
exports.__esModule = true;
var a = {};
(function (a) {
    var b = a.b || (a.b = {});
    (function (b) {
        var c = /** @class */ (function () {
            function c() {
            }
            return c;
        }());
        b.c = c;
    })(b);
})(a);
exports.b = a.b;
exports.x = new exports.b.c();


//// [internalAliasInitializedModuleInsideTopLevelModuleWithExport.d.ts]
export declare module a {
    module b {
        class c {
        }
    }
}
export import b = a.b;
export declare var x: b.c;
