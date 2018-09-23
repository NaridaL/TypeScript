//// [parameterPropertyInConstructor2.ts]
module mod {
  class Customers {
    constructor(public names: string);
    constructor(public names: string, public ages: number) {
    }
  }
}


//// [parameterPropertyInConstructor2.js]
var mod = mod || (mod = {});
(function (mod) {
    var Customers = /** @class */ (function () {
        function Customers(names, ages) {
            this.names = names;
            this.ages = ages;
        }
        return Customers;
    }());
})(mod);
