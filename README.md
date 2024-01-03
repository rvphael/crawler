# Crawler

Este projeto é uma solução para o teste técnico da Pill, consistindo em um crawler que consulta dados de produtos do site da Drogasil e disponibiliza esses dados através de uma API. Uma interface frontend também é fornecida para mostrar esses dados.

## Requisitos para executar sem Docker

- Node >= v16.16.0
- Yarn >= v1.22.21
- NPX >= v8.11.0
- MySQL >= v8.0.25

## Requisitos para executar com Docker

- Docker >= v24.0.7
- Docker Compose >= v2.10.0

## Configuração e Execução

Antes de iniciar a aplicação, é necessário configurar as variáveis de ambiente:

1. Renomeie o arquivo `.env_example` para `.env`.
2. Preencha as variáveis de ambiente no arquivo `.env` com os valores apropriados.

### Rodar Localmente sem Docker

#### Backend

1. Na raiz do projeto, execute `yarn install` para instalar as dependências.
2. Crie a base de dados `crawler_db_dev` no MySQL.
3. Entre na pasta `packages/backend` e execute `npx sequelize-cli db:migrate`.
4. Execute `yarn dev` para rodar o projeto.
5. O backend estará disponível na porta `4000`.

#### Frontend

1. Em um novo terminal, navegue até `packages/frontend`.
2. Execute `yarn start`.
3. Acesse `http://localhost:3000/product?url=https://www.drogasil.com.br/neosaldina-30-drageas.html`.

### Rodar Localmente com Docker

1. Na raiz do projeto, execute `docker-compose up -d`.
2. Acesse `http://localhost:3000/product?url=https://www.drogasil.com.br/neosaldina-30-drageas.html`.

## Testes

### Backend
- Na raiz do projeto, execute `yarn workspace @crawler/backend test` para rodar os testes unitários do backend.

### Frontend
- Na raiz do projeto, execute `yarn workspace @crawler/frontend test` para rodar os testes unitários do frontend.

## Documentação da API com Swagger

A documentação completa da API está disponível através do Swagger UI.

Para acessar a documentação, inicie o servidor e visite `http://localhost:4000/api-docs` no seu navegador.

A documentação do Swagger oferece uma visão detalhada de todos os endpoints da API, incluindo os parâmetros esperados, os formatos de resposta e os códigos de status.

### Exemplo de Uso da API

Para um exemplo rápido de uso da API, você pode acessar:

`[GET] http://localhost:4000/api/product?url=https://www.drogasil.com.br/neosaldina-30-drageas.html`

Este exemplo demonstra como consultar dados de um produto específico do site da Drogasil.
