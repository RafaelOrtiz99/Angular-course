"use strict";
(function () {
    var myFunction = function (a) {
        return a;
    };
    var sumN = function (a, b) {
        return a + b;
    };
    var myFunctionArrow = function (a) { return a; };
    var sumA = function (a, b) { return a + b; };
    var hulk = {
        name: 'hulk',
        smash: function () {
            var _this = this;
            setTimeout(function () {
                console.log(_this.name + " smash!!!");
            }, 1000);
        }
    };
    hulk.smash();
})();
