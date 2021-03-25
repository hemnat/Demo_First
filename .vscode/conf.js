exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.js']
};

var HtmlReporter = require('protractor-beautiful-reporter');
exports.config = {
	// your config here
	framework: 'jasmine', 
		seleniumAddress: 'http://localhost:4444/wd/hub', 
		capabilities: { 
		browserName: 'chrome', 
		}, 
		specs: ['spec.js'],
	onPrepare: function() {
	// Add a screenshot reporter and store screenshots to `/Reports/screenshots`:
		jasmine.getEnv().addReporter(new HtmlReporter({baseDirectory: '/Reports/screenshots'}).getJasmine2Reporter());
	
	}
};