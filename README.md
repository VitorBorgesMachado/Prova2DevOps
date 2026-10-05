# Prova2DevOps

Projeto desenvolvido para a disciplina de DevOps.

O projeto é um sistema de "inventário", onde é possível cadastrar, consultar, alterar e excluir itens do estoque.

O projeto possui:

* api/ - API feita com NestJS
* front/ - Front-end feito com React
* deploy/ - Arquivos do Docker Compose

## Sumário

* Requisitos
* Estrutura do projeto
* Como executar
* Tabela inventory
* Endpoints
* Exemplos
* Como parar os containers

## Requisitos

Para rodar o projeto é necessário ter:

* Git
* Docker
* Docker Compose
* Node.js
* npm

## Estrutura do projeto


Prova2_DevOps/
├── api/
├── front/
├── deploy/
├── .gitignore
└── README.md


## Como executar

Primeiro, clone o repositório:


git clone URL_DO_REPOSITORIO


Depois entre na pasta:


cd Prova2_DevOps


Para iniciar o projeto:


docker compose up --build


Se quiser deixar os containers rodando em segundo plano:


docker compose up --build -d


## Tabela inventory

A tabela utilizada no projeto é a inventory.

| Campo         | Descrição             |
| ------------- | --------------------- |
|  id           | ID do item            |
|  item_code    | Código do item        |
|  description  | Descrição do item     |
|  quantit      | Quantidade disponível |
|  min_stock    | Estoque mínimo        |

Exemplo:


{
  "id": 1,
  "item_code": "PROD001",
  "description": "Teclado USB",
  "quantity": 25,
  "min_stock": 10
}


## Endpoints

A API possui os seguintes endpoints:

| Método | Endpoint         | Descrição        |
| ------ | ---------------- | ---------------- |
| GET    |  /inventory      | Lista os itens   |
| GET    |  /inventory/:id  | Busca um item    |
| POST   |  /inventory      | Cadastra um item |
| PATCH  |  /inventory/:id  | Altera um item   |
| DELETE |  /inventory/:id  | Exclui um item   |

## Exemplos

### Listar os itens

GET /inventory

Resposta:


[
  {
    "id": 1,
    "item_code": "PROD001",
    "description": "Teclado USB",
    "quantity": 25,
    "min_stock": 10
  }
]


### Buscar um item

GET /inventory/1

Resposta:


{
  "id": 1,
  "item_code": "PROD001",
  "description": "Teclado USB",
  "quantity": 25,
  "min_stock": 10
}


### Cadastrar um item

POST /inventory

Enviar:


{
  "item_code": "PROD002",
  "description": "Mouse USB",
  "quantity": 15,
  "min_stock": 5
}


### Alterar um item

PATCH /inventory/1

Enviar:


{
  "quantity": 30
}


### Excluir um item

DELETE /inventory/1

Remove o item com o ID informado.

## Como parar os containers

Para parar os containers:


docker compose down


Para parar e remover também os volumes:


docker compose down -v


> O comando "docker compose down -v" apaga os dados armazenados no volume do banco.

## Docker Compose

O projeto possui três serviços:

* PostgreSQL
* API NestJS
* Front React

A API se comunica com o PostgreSQL e o Front-end se comunica com a API.

O banco utiliza um volume para manter os dados quando os containers forem reiniciados.
