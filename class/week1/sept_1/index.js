'use strict';
//__dirname gives absolute file path, a consistent way to make sure your path is right.
console.log(__dirname);
module.exports = exports = require(__dirname + '/lib/greet');