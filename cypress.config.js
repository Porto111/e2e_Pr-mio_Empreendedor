const { defineConfig } = require("Cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 15000, 
    responseTimeout: 15000, 
    baseUrl: "https://web-premio-empreendedor-sabesp.dev.internal.solutis.xyz/",
    specPattern: "**/*.feature", 
    setupNodeEvents(on, config) {
     
      on("file:preprocessor", cucumber());
      
    },
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports", 
      video: true,
      overwrite: false, 
      html: true, 
      json: true, 
      timestamp: "yyyy-mm-dd_HH-MM-ss", 
    },
    },
});

