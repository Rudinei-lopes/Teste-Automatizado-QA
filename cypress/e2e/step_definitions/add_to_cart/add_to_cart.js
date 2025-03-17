import { Given, When, Then} from "cypress-cucumber-preprocessor/steps";

Given("que estou na página de busca com o produto {string}", (produto) => {
    cy.acessarSite();
    cy.get(":nth-child(4) > .img").click();
    cy.get("#autoComplete").type(produto + "{enter}");
})

When("adiciono o primeiro produto encontrado ao carrinho", ()=> {
    cy.get(".product").first().click();
    cy.get("#product-section");
    cy.get(".fixedBtn > button").click();
})

Then("o produto deve aparecer no carrinho", () => {
    cy.get("#menuCart").click();
    cy.get("#shoppingCart");
    cy.get('thead > tr > :nth-child(2) > .roboto-light').should("contain.text","PRODUCT NAME");
    cy.get('thead > tr > :nth-child(4) > .roboto-light').should("contain.text","COLOR");
    cy.get('.quantity > .roboto-light').should("contain.text","QUANTITY");
    cy.get('thead > tr > :nth-child(6) > .roboto-light').should("contain.text","PRICE");
});