# atv2-bea-it

Atividade 2 do curso de Back-end Avançado da iTalents, continuando o projeto de marketplace iniciado em aula.

## Objetivo da atividade

Implementar os recursos de **Products** e **Categories** que não foram codificados em aula, incluindo:

- Casos de Uso
- Repositórios
- Rotas

Obs.: Também é esperado validar os endpoints no Thunder Client antes da entrega. Porém, devido à limitação atual da ferramenta de forma gratuita, será utilizado o [Hoppscotch](https://docs.hoppscotch.io).

## Tecnologias obrigatórias da atividade

- Linguagens: TypeScript e MongoDB
- Bibliotecas: Mongoose, Jest, Supertest, Joi, Axios, JWT, Multer
- Paradigma: Programação orientada a objetos

Status neste projeto:

- Em uso: TypeScript, MongoDB, Mongoose, Joi, JWT, POO
- Ainda não configurado neste repositório: Jest, Supertest, Axios, Multer

## Requisitos funcionais atendidos

### Products

- POST /products
- GET /products
- GET /products/:id
- PATCH /products/:id
- DELETE /products/:id
- POST /products/add-category/:categoryId/:productId
- DELETE /products/remove-category/:categoryId/:productId

### Categories

- POST /categories
- GET /categories
- GET /categories/:id
- PUT /categories/:id
- DELETE /categories/:id

Observação: o enunciado aceita PUT/PATCH. Neste projeto, Categories usa PUT e Products usa PATCH.

## Módulos ativos

- Auth
- Users
- Categories
- Products

## Ambiente

- Node.js 18+
- npm 9+
- MongoDB em execução (local ou remoto)

## Instalação

```bash
npm install
```

## Execução

```bash
npm run dev
```

Script atual:

- tsx watch src/server.ts

Base URL local padrão:

- http://localhost:5000

## Autenticação

As rotas protegidas exigem o header:

```http
Authorization: Bearer <token>
```

Token obtido em:

- POST /auth/signin

## Licença

[GNU](LICENSE)
