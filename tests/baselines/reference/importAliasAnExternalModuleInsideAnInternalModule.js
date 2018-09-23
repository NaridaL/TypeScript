//// [tests/cases/compiler/importAliasAnExternalModuleInsideAnInternalModule.ts] ////

//// [importAliasAnExternalModuleInsideAnInternalModule_file0.ts]
export module m {
    export function foo() { }
}

//// [importAliasAnExternalModuleInsideAnInternalModule_file1.ts]
import r = require('./importAliasAnExternalModuleInsideAnInternalModule_file0');
module m_private {
    //import r2 = require('m'); // would be error
    export import C = r; // no error
    C.m.foo();
}


//// [importAliasAnExternalModuleInsideAnInternalModule_file0.js]
"use strict";
exports.__esModule = true;
var m = {};
(function (m) {
    function foo() { }
    m.foo = foo;
})(m);
//// [importAliasAnExternalModuleInsideAnInternalModule_file1.js]
"use strict";
exports.__esModule = true;
var r = require("./importAliasAnExternalModuleInsideAnInternalModule_file0");
var m_private = {};
(function (m_private) {
    //import r2 = require('m'); // would be error
    m_private.C = r; // no error
    m_private.C.m.foo();
})(m_private);
