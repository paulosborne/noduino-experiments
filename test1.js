var arduino = require('duino'),
    _       = require('underscore');

var pins    = [3,4,5,6,7,8];
var leds    = {};
var ticks   = 100;

var board = new arduino.Board({
    device : "ACM",
    debug  : true
});

board.on('ready', function () {

    pins.forEach(function (num) {
        leds[num] = new arduino.Led({ board: board, pin: num })
    });

    _.each(_.keys(leds), function (pin) {
        leds[pin].blink();
    });
});
