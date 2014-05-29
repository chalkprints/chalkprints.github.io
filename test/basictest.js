// usage: phantomjs test/basictest.js localhost:8080

var page = require('webpage').create(),
    system = require('system');

if (system.args.length === 1) {
  console.log('Usage: phantomjs basictest.js <some URL>');
  phantom.exit();
}

var t = Date.now();
var address = system.args[1];
if (address.lastIndexOf("http", 0) !== 0) address = "http://" + address;

console.log('Opening: ' + address);

page.open(address, function(status) {
  if (status !== 'success') {
    console.log('FAIL to load the address');
  } else {
    t = Date.now() - t;
    console.log('Loading time ' + t + ' msec');
    page.render('homepage.png');
  }
  phantom.exit();
});