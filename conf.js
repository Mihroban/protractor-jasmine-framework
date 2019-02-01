exports.config = {
    seleniumAddress:'http://localhost:4444/wd/hub',

    capabilities: {
        //by default, protractor will run the tests on chrome;
        //'browserName': 'firefox',
        'browserName': 'chrome',
      },

    specs: [//'specs/spec.js',
            //'specs/calculator.js',
            'specs/listAll_spec.js'
        ]
};