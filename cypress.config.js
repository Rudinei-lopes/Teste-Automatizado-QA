const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    specPattern: ["cypress/e2e/step_definitions/*.feature", "cypress/e2e/api/*.cy.js", "cypress/integration/*.spec.js"]
  },
});
