import { Given, When, Then} from "cypress-cucumber-preprocessor/steps";

Given("que estou na página de busca com o produto {string}", (produto) => {
    cy.visit("https://advantageonlineshopping.com/");
    cy.get(":nth-child(4) > .img").click();
    cy.get("#autoComplete").type(produto + "{enter}");
})

When("adiciono o primeiro produto encontrado ao carrinho", ()=> {
    cy.get(".product").first().click();
    cy.get("#product-section");
    cy.get(".fixedBtn > button").click();
})

When("acesso a tela de checkout", () => {
    cy.get("#menuCart").click();
    cy.get("#shoppingCart");
    cy.get('#checkOutButton').click();
});

Then("o sistema deve exibir o produto correto no resumo do pedido", () => {
    cy.get("#orderPayment");
    cy.get("#userCart");
    cy.get('h3.roboto-regular').should("contain.text","ORDER PAYMENT");
    cy.get('h5.roboto-regular').should("contain.text","ORDER SUMMARY");
    cy.get(".penetrationInCart").should("contain.text", "PRODUCT");
    cy.get(".totalTitle").should("contain.text", "TOTAL");
    
});

