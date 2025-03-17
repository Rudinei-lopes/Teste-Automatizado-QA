Feature: Validação de pesquisa de produto inexistente

Scenario: Usuário busca um produto inexistente
  Given que estou na página inicial do Advantage Online Shopping
  When eu pesquiso pelo produto "lalala"
  Then o sistema deve exibir uma mensagem de "No results for 'lalala'"