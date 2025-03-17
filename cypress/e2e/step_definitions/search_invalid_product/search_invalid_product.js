import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("que estou na página inicial do Advantage Online Shopping", () => {
    cy.acessarSite();
});

When("eu pesquiso pelo produto {string}", (produto) => {
  cy.get(":nth-child(4) > .img").click();
  cy.get("#autoComplete").type(produto + "{enter}");
});

Then("o sistema deve exibir uma mensagem de {string}", (mensagemEsperada) => {
    cy.log("Produto buscado: " + mensagemEsperada);
    cy.get("#searchResultLabel").should("contain.text", "Search result:");
    cy.get(".noProducts").should("be.visible");
    cy.get(".noProducts span.ng-binding")
    .invoke("text") 
    .then((text) => {
      const textoFormatado = text.trim().replace(/\n/g, ""); 
      expect(textoFormatado).to.include(mensagemEsperada.replace(/'/g, '"')); 
    });
});