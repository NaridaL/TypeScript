//// [binopAssignmentShouldHaveType.ts]
declare var console;
"use strict";
module Test {
 export class Bug {
  getName():string {
   return "name";
  }
  bug() {
   var name:string= null;
   if ((name= this.getName()).length > 0) {
    console.log(name);
   }
  }
 }
}

 



//// [binopAssignmentShouldHaveType.js]
"use strict";
var Test = Test || (Test = {});
(function (Test) {
    var Bug = /** @class */ (function () {
        function Bug() {
        }
        Bug.prototype.getName = function () {
            return "name";
        };
        Bug.prototype.bug = function () {
            var name = null;
            if ((name = this.getName()).length > 0) {
                console.log(name);
            }
        };
        return Bug;
    }());
    Test.Bug = Bug;
})(Test);
