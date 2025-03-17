Cypress.Commands.add("acessarSite", () => {
    cy.viewport(1920, 1080);
    cy.visit("https://advantageonlineshopping.com/");
  });