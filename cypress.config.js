const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter:'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000,
    baseUrl: 'https://staging-bida-g2.oss.net.bd/',
    specPattern: [
      'cypress/e2e/login.cy.js',
      'cypress/e2e/bidaRegistration.cy.js',
      'cypress/e2e/bidaRegistrationApplicationProcess.cy.js',
      'cypress/e2e/fullTest.cy.js'
    ]
  },
});
