//// [nameCollisionWithBlockScopedVariable1.ts]
module M {
    export class C { }
}
module M {
    {
        let M = 0;
        new C();
    }
}

//// [nameCollisionWithBlockScopedVariable1.js]
var M = M || (M = {});
(function (M) {
    class C {
    }
    M.C = C;
})(M);
(function (M_1) {
    {
        let M = 0;
        new M_1.C();
    }
})(M);
