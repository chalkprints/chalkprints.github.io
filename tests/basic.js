// casper.options.logLevel = "debug";
// casper.options.verbose = true;

casper.test.begin('Camp4 home page renders', 4, function suite(test) {

    casper.start("http://localhost:8080/", function() {
        test.assertTitleMatch(/Camp4.*Yosemite/, "title ok");
        test.assertExists('.map', "map found");
        test.assertExists('.videowrap', "vid player found");
        test.assertExists('.thumbs', "thumbnails found");
    });

    casper.run(function() {
        test.done();
    });
});