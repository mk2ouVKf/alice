var replaceStream = require('replacestream');
var pipe = require('multipipe');

module.exports = replaceStream('www.decathlon.fr', '127.0.0.1:5000');
