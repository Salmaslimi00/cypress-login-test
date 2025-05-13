const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalModifyObstructiveThirdPartyCode: true,
    pageLoadTimeout: 180000,
    defaultCommandTimeout: 10000, // Augmente le timeout à 10 secondes
    responseTimeout: 60000, // Timeout pour les réponses réseau à 1 minute
    requestTimeout: 10000, // Timeout pour les requêtes réseau à 10 secondes
    chromeWebSecurity: false,
    experimentalInteractiveRunEvents: true,
    
  },
});

