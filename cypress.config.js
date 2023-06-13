const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: false,
  viewportWidth: 1600,
  viewportHeight: 900,
  chromeWebSecurity: false,
  numTestsKeptInMemory: 5,
  screenshotsFolder: "reports/screenshots",
  // reporter: "cypress-multi-reporters",

  reporterOptions: {
    reporterEnabled: "mochawesome",
    mochawesomeReporterOptions: {
      reportDir: "cypress/reports/mocha",
      quite: true,
      overwrite: false,
      html: false,
      json: true,
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
