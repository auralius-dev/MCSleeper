let f = require("./format");

// This is the logger that tries to replicate how minecraft logs stuff.
// It's one line because I can.
function makeDate() {
    return "[" + (new Date().toLocaleTimeString('en-GB'));
}

let log = console.log;
console.log = function () { log.apply(console, [f.reset + makeDate() + " INFO]: " + arguments[0] + f.reset].concat(Array.prototype.slice.call(arguments, 1))); };

let error = console.error;
console.error = function () { error.apply(console, [f.red + makeDate() + " ERROR]: " + arguments[0] + f.reset].concat(Array.prototype.slice.call(arguments, 1))); };