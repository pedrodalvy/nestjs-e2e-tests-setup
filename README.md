# NestJS e2e Tests Setup

Projeto criado com setup de exemplo para testes e2e com NestJS

## Descrição

Foi criada uma config para testes e2e com NestJS, como exemplo, para testes de integração com o banco de dados.

A aplicação e feita com GraphQL, utilizando a biblioteca [Nestjs-query](https://doug-martin.github.io/nestjs-query/)
para os CRUDs. Apenas um modulo básico de estados foi criado, com testes simples, só para exemplo de criação dos testes.

## Instalação

```bash
$ yarn install
```

## Execução

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Testes

```bash
# e2e tests
$ npm run test:e2e
```
