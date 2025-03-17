# Teste-QA

Teste de automatização para vaga de QA pleno.

## Pre-requisitos

É necessário ter o Node.js e o npm instalados para rodar este projeto.

> Eu usei as versões `v18.11.0` do Node.js e `8.19.2` do npm, respectivamente. Sugiro que utilize as mesmas versões ou versões posteriores.

## Instação

Execute `npm install` (ou `npm i` para a versão abreviada) para instalar as dependências de desenvolvimento.

## Testes

Execute  `npm test` para rodar o teste no modo headless.

Ou, execute `npm run cy:open` para abrir o Cypress no modo interativo.


## Melhorias 
Caso a URL seja alterada basta mudar na pasta `support` no arquivo `commands.js` 


## Teste de API
para teste da api ei já criei o usuário ADMIN para facilitar
userId = 473517630;
token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ3d3cuYWR2YW50YWdlb25saW5lc2hvcHBpbmcuY29tIiwidXNlcklkIjo0NzM1MTc2MzAsInN1YiI6IlRlc3RlQUIiLCJyb2xlIjoiQURNSU4ifQ.Oc9w_8p96BqpQ3uKW9D8wEoIW4LbQksInt5j5Qi0mK0";

para alteração da imagem só precisa trocar o `productId` e `color` que encontra-se na pasta integration

o restante dos teste estão na pasta `api`

OBS:  o site de testes caia bastante, as vezes não funciona então o teste pode quebrar.