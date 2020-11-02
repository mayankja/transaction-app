// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

/**
 * @type { import("protractor").Config }
 */
exports.config = {
  SELENIUM_PROMISE_MANAGER: false,
  allScriptsTimeout: 11000,
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
  capabilities: {
    browserName: process.env.PROTRACTOR_BROWSER || 'chrome',
    chromeOptions: {
      binary: process.env.PROTRACTOR_CHROME_BIN || undefined,
      args: process.env.PROTRACTOR_CHROME_ARGS ? JSON.parse(process.env.PROTRACTOR_CHROME_ARGS) : ['lang=en-US'],
      prefs: {
        intl: { accept_languages: 'en-US' },
      },
    },
  },
  directConnect: true,
  seleniumAddress: 'http://localhost:4444/wd/hub',
  baseUrl: 'http://localhost:4200/',
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  framework: 'jasmine2',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};