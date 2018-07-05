var bulk = require('bulk-require');
var translations = bulk(__dirname + '/languages', '*.json');

module.exports = translations;
