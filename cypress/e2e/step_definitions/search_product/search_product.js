import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("que estou na página inicial do Advantage Online Shopping", () => {
  cy.acessarSite();
});

When("eu pesquiso pelo produto {string}", (produto) => {
  cy.get(":nth-child(4) > .img").click();
  cy.get("#autoComplete").type(produto + "{enter}");
});

Then("o sistema deve exibir somente produtos relacionados à busca", () => {
  cy.get(".select").should("contain.text", "tablet");
  cy.get("#searchResultLabel").should("contain.text", "tablet");
  cy.get('.top6Products > .roboto-medium.ng-binding').should("contain.text", "tablet");
  cy.get(".categoryRight");
});