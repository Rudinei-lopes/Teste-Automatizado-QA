describe("API - Buscar Produto", () => {
    it("Deve buscar um produto especifico e validar a resposta", () => {
      cy.request({
        method: "GET",
        url: "https://www.advantageonlineshopping.com/catalog/api/v1/products/search?name=mouse",
      }).then((response) => {
        console.log("response", response);
        
        expect(response.status).to.eq(200);
        const responseBody = response.body[0]; 
        expect(responseBody).to.have.property("products");
        expect(responseBody.products[0].productName).to.include("Mouse");
      });
    });
  });