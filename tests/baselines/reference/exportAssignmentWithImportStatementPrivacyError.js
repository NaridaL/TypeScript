//// [exportAssignmentWithImportStatementPrivacyError.ts]
module m2 {
    export interface connectModule {
        (res, req, next): void;
    }
    export interface connectExport {
        use: (mod: connectModule) => connectExport;
        listen: (port: number) => void;
    }

}

module M {
    export var server: {
        (): m2.connectExport;
        test1: m2.connectModule;
        test2(): m2.connectModule;
    };
}
import M22 = M;

export = M;

//// [exportAssignmentWithImportStatementPrivacyError.js]
define(["require", "exports"], function (require, exports) {
    "use strict";
    var M = {};
    (function (M) {
    })(M);
    return M;
});
