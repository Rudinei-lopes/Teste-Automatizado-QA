import { Given, When, Then} from "cypress-cucumber-preprocessor/steps";

Given("que um produto foi adicionado ao carrinho", () => {
    cy.acessarSite();
    cy.get(":nth-child(4) > .img").click();
    cy.get("#autoComplete").type("tablet{enter}");
    cy.get(".product").first().click();
    cy.get("#product-section");
    cy.get(".fixedBtn > button").click();
    cy.get("#menuCart").click();
    cy.get("#shoppingCart");
    cy.get('.sticky').should("contain.text","SHOPPING CART"); 
})

When("eu removo o produto do carrinho", () => {
    cy.get(".remove").click();
});

Then("o sistema deve exibir a mensagem de {string}", (mensagem) => {
    cy.get(".bigEmptyCart > .roboto-bold").should("have.text", mensagem);
  });