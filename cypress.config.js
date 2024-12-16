const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  // pageLoadTimeout: 6000,
  env: {
    url: 'https://parabank.parasoft.com/parabank',
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    specPattern: 'cypress/e2e/pages/*.js'
  },
});
