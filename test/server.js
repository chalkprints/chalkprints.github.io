// runs a NodeJS driven web server that launches our site
// usage: node test/server.js . 8080 &

var connect = require('connect');
var args = process.argv.slice(2);

connect().use(connect.static(args[0])).listen(args[1]);