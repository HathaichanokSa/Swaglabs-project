const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://www.saucedemo.com/",
    viewportHeight: 1080,
    viewportWidth: 1920,
    pageLoadTimeout: 20000,
    chromeWebSecurity: false,
  },
});
