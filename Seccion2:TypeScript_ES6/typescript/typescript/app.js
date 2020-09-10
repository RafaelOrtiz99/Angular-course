"use strict";
(function () {
    //parameters order: Obligatory, optionals, default value
    function activate(who, moment, object) {
        if (object === void 0) { object = 'batsignal'; }
        if (moment) {
            console.log(who + " activate the " + object + " at the " + moment);
        }
        else {
            console.log(who + " activate the " + object);
        }
    }
    activate('Gordon', 'night');
})();
