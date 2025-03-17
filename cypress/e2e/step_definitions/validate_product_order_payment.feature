Feature: Validação dos produtos no carrinho na tela de pagamento

  Scenario: Usuário adiciona um produto e valida na tela de pagamento
    Given que estou na página inicial do Advantage Online Shopping
    When eu pesquiso pelo produto "tablet"
    And adiciono o primeiro produto encontrado ao carrinho
    And acesso a tela de checkout
    Then o sistema deve exibir o produto correto no resumo do pedido