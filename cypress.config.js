const { defineConfig } = require("Cypress");
const cucumber = require("cypress-cucumber-preprocessor").default

module.exports = defineConfig({
  e2e: {
    "video": true,
    defaultCommandTimeout: 10000,
    baseUrl: "https://web-premio-empreendedor-sabesp.dev.internal.solutis.xyz/",
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber())
      // implement node event listeners here
    },
  },
  
});
