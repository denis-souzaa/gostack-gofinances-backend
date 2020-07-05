## 🤑🤑 GO Finances - Backend

Aplicação Go Finances e um sistema para controle de transações, o usuário poderá listar suas transações, além de cadastrar novas simplemesmente importando um arquivo CSV.

A aplicação foi desenvolvida utilizando Node JS com typescript e frontend em React JS, o projeto por ser encontrado no link abaixo

*[Go Finances Frontend](https://github.com/SistemasSouza/gostack-gofinances-frontend)*

## Libs

Node JS ✔

Typescript ✔

Postgres ✔

TypeORM ✔

## Executando o projeto

- 1º Passo:
  rodar `yarn` ou `npm install` no terminal para baixar todas as dependências

  2º Passo: Alterar o arquivo `ormconfig.json` setando a url, usuário e senha do banco de dados

  3º Passo: Rodar o comando `yarn typeorm migration:run` ou `npm run typeorm migration:run` para que as migrações criem os as tabelas no banco de dados

- 4º Passo: rodar `yarn dev:server` ou `npm dev:server` para subir o servidor


## Endpoints

- /transactions [Get, Post, Delete]
- /transactions/import [Post]

##

Desenvolvido por Denis Souza, durante a Gostack 12 - Rocketseat
