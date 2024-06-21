<p align="center">
  <img alt="Inoa" width="220px" src="https://private-user-images.githubusercontent.com/9595529/341638547-2f96c506-e7c5-4d9a-b246-479556e56923.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTg5NDM5MzEsIm5iZiI6MTcxODk0MzYzMSwicGF0aCI6Ii85NTk1NTI5LzM0MTYzODU0Ny0yZjk2YzUwNi1lN2M1LTRkOWEtYjI0Ni00Nzk1NTZlNTY5MjMucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI0MDYyMSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNDA2MjFUMDQyMDMxWiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9MGZkNTA3MTAzZTdiNjk5MjgwMWJhMjM2MDcwZjIzMzBkN2MwMzIxOTczNGRjOGJkZWRhN2U1MjE4YmEzNjIzMSZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QmYWN0b3JfaWQ9MCZrZXlfaWQ9MCZyZXBvX2lkPTAifQ.GIU4zpAs_O8eWoaoTnQxDV7YEMkgtELMSzkJa-kzpq0" width="160px">
</p>

<h1 align="center">Inoa Challenge API</h1>

<br>

## 💻 Projeto

Este projeto é um desafio proposto pela empresa **[Inoa](https://www.inoa.com.br/)** .</br>
</br>
Requisitos do desafio</br></br>
O objetivo do sistema é permitir que o usuário consulte o preço de fechamento diário de um ou mais ativos da B3 e exibir o resultado em um gráfico de linha numa página da web.

O programa deve possuir um front-end e um back-end, em que o back-end consultará uma API de cotação para obter os preços e o front-end exibirá o resultado. A linguagem, framework e bibliotecas utilizadas no front e back são de livre escolha, mas temos preferência pelo back em C# ou node e pelo front em Angular ou React.

Na tela, o usário deve conseguir preencher um formulário simples com os campos abaixo para solicitar a consulta:

Os ativos a serem consultados (ex: PETR4 E VALE3). Caso seja escolhido mais de um, é esperado que o resultado de todos os ativos seja exibido no mesmo gráfico</br>
A data de início da consulta</br>
A data de fim da consulta

## 🧪 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node](https://nodejs.org/)
- [Nest](https://github.com/nestjs/nest)
- [Axios](https://axios-http.com/)
- [Render](https://render.com/)

## 🚀 Como executar

Gere o API KEY da [Alpha Vantage](https://www.alphavantage.co/) e preencha a variável de ambiente _ALPHA_VANTAGE_API_KEY_

Gere o TOKEN da [Brapi](https://brapi.dev/) e preencha a variável de ambiente _BRAPI_TOKEN_

Clone o projeto e acesse a pasta do mesmo.

```bash
$ git clone https://github.com/andregodasi/inoa-challenge-api.git
$ cd inoa-challenge-api
```

Para iniciá-lo, siga os passos abaixo:

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

O API estará disponível em http://localhost:3000.


## 📝 License

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

## 🦸 Autor

<a href="https://www.linkedin.com/in/andre-godasi/">
 <img style="border-radius: 50%;" src="https://media.licdn.com/dms/image/C4D03AQGxOMYvdCao3A/profile-displayphoto-shrink_200_200/0/1661188755674?e=1724284800&v=beta&t=9ZeBK2WzsdYpBxjA4RG2TijNkI4d0iKD2HyL7zT9mn4" width="100px;" alt=""/>
 <br />
 <sub><b>André Gonçalves</b></sub></a> <a href="https://www.linkedin.com/in/andre-godasi/" title="André Gonçalves">🚀</a>
 <br />

---

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

Feito por André Gonçalves 👋🏽 [Entre em contato!](https://www.linkedin.com/in/andre-godasi/)
