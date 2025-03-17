describe('Atualização da Imagem do Produto', () => {
    const userId = 473517630;
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ3d3cuYWR2YW50YWdlb25saW5lc2hvcHBpbmcuY29tIiwidXNlcklkIjo0NzM1MTc2MzAsInN1YiI6IlRlc3RlQUIiLCJyb2xlIjoiQURNSU4ifQ.Oc9w_8p96BqpQ3uKW9D8wEoIW4LbQksInt5j5Qi0mK0";
    const productId = 19;
    const color = "blue";
    const source = "source";
    const imagePath = "teste-tenis.jpg";

    it('Deve atualizar a imagem do produto e verificar a resposta', () => {
        cy.fixture(imagePath, 'binary').then((fileContent) => {
            // Converte o conteúdo binário para um Blob
            const blob = Cypress.Blob.binaryStringToBlob(fileContent, 'image/jpeg');
            console.log("blob", blob);

            // Cria um FormData para enviar a imagem
            const formData = new FormData();
            formData.append('file', blob, imagePath);
            console.log("formData", formData);
            // Cria uma nova instância de XMLHttpRequest
            const xhr = new XMLHttpRequest();

            // Abre a conexão com a API
            xhr.open('POST', `https://www.advantageonlineshopping.com/catalog/api/v1/product/image/${userId}/${source}/${color}?product_id=${productId}`);

            // Define o cabeçalho de autorização
            xhr.setRequestHeader('Authorization', `Bearer ${token}`);

            // Define o callback para quando a requisição for concluída
            xhr.onload = function () {
                // Verifica se a requisição foi bem-sucedida
                if (xhr.status === 200) {
                    const response = JSON.parse(xhr.response);

                    // Verifica o status code
                    expect(xhr.status).to.eq(200);

                    // Verifica se a resposta indica sucesso
                    expect(response.success).to.be.true;
                    console.log("response.success", response);

                    
                    expect(response.id).to.eq(productId);
                    expect(response.imageId).to.be.a('string');
                    expect(response.imageId).to.include('custom_image_source_');
                    expect(response.reason).to.include('Product was updated successful');
                    expect(response.imageColor).to.eq(color);
                } else {
                    // Caso a requisição falhe, lança um erro
                    throw new Error(`Falha na requisição: ${xhr.status}`);
                }
            };

            xhr.send(formData);
        });
    });
});