Feature: Adicionar produto ao carrinho

Scenario: Usuário adiciona um produto ao carrinho
  Given que estou na página de busca com o produto "laptop"
  When adiciono o primeiro produto encontrado ao carrinho
  Then o produto deve aparecer no carrinho