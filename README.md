# Crawler

Este projeto é uma solução para o teste técnico da Pill, consistindo em um crawler que consulta dados de produtos do site da Drogasil e disponibiliza esses dados através de uma API. Uma interface frontend também é fornecida para mostrar esses dados.

Um monorepo que inclui uma aplicação backend para scraping de dados e um frontend para visualização desses dados. O backend é construído com Node.js e o frontend com React.

## Requisitos

- Node >= v16.16.0
- Yarn >= v1.22.21
- NPX >= v8.11.0
- Docker >= v24.0.7
- Docker Compose >= v2.10.0
- MySQL >= v8.0.25

## Configuração e Execução

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

## Documentação da API
### Visão Geral
Esta API fornece informações sobre produtos coletados de um site externo (Drogasil) através de um processo de crawling. Ela foi desenvolvida como parte do teste técnico da Pill.

### Base URL
`http://localhost:4000/api`

## Endpoint: Consulta de Dados de Produto

### URL

`GET /api/product`

### Descrição

Este endpoint realiza o crawling de informações de produto de um URL específico da Drogasil. Retorna os detalhes do produto se encontrado.

### Parâmetros

- **Query**:
  - `url` (string): URL do produto no site da Drogasil.

### Respostas

#### 200 OK

- Retornado quando o produto é encontrado com sucesso.
- **Conteúdo da Resposta**:
  ```json
  {
    "name": "Nome do Produto",
    "barcode": "Código de Barras do Produto",
    "brand": "Marca do Produto",
    "image": "URL da Imagem do Produto",
    "price": "Preço do Produto"
  }
  ```

#### 404 Not Found

- Retornado quando a URL do produto não é encontrada.
- **Conteúdo da Resposta**:
  ```json
  {
    "message": "Produto não encontrado."
  }
  ```

- Retornado quando o produto não é encontrado.
- **Conteúdo da Resposta**:
  ```json
  {
    "message": "Produto não encontrado no site externo"
  }
  ```

#### Exemplo de Uso
```
GET http://localhost:4000/api/product?url=https://www.drogasil.com.br/neosaldina-30-drageas.html
```
