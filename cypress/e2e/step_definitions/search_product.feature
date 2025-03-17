Feature: Busca de Produto

Scenario: Usuário busca um produto
  Given que estou na página inicial do Advantage Online Shopping
  When eu pesquiso pelo produto "tablet"
  Then o sistema deve exibir somente produtos relacionados à busca