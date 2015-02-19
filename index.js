var bulk = require('bulk-require');
var translations = bulk(__dirname + '/languages', '*.json');
translations.cz = translations.cs;

module.exports = translations;
