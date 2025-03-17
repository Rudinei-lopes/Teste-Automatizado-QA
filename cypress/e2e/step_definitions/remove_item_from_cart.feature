Feature: Remover item do carrinho

Scenario: Usuário adiciona um produto e depois remove do carrinho
 Given que um produto foi adicionado ao carrinho
 When eu removo o produto do carrinho
 Then o sistema deve exibir a mensagem de "Your shopping cart is empty" 