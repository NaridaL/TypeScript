//// [labeledStatementWithLabel_es2015.ts]
label: function fn() { }
label: function* gen() { }
label: async function gen1() { }
label: enum E {}
label: interface I {}
label: class C { }
label: var a = 1;
label: let b = 1;
label: const c = 1;

label: module M { }
label: namespace N {}
label: type T = {}


//// [labeledStatementWithLabel_es2015.js]
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
label: function fn() { }
label: function* gen() { }
label: function gen1() {
    return __awaiter(this, void 0, void 0, function* () { });
}
label: {
    var E = E || (E = {});
    (function (E) {
    })(E);
}
label: 
label: class C {
}
label: var a = 1;
label: let b = 1;
label: const c = 1;
label: 
label: 
label: 
