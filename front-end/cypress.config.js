export default {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "front-end/cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    baseUrl: 'https://rocket-x-orpin.vercel.app/',
    supportFile: false
  },
};
