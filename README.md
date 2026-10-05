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

Clone o repositório:

git clone URL_DO_REPOSITORIO

Entre na pasta do projeto:

cd Prova2_DevOps

Para iniciar todos os serviços:

docker compose up --build

Para iniciar em segundo plano:

docker compose up --build -d

## O projeto possui três serviços:

PostgreSQL
API NestJS
Front React
Banco de dados

## O banco utilizado é o PostgreSQL.

Tabela:

inventory

Campo	        Descrição
id	            Identificador do item
item_code	    Código do item
description	    Descrição
quantity	    Quantidade em estoque
min_stock	    Estoque mínimo

Os dados do PostgreSQL são armazenados em um volume nomeado para garantir a persistência.

## API

A API foi desenvolvida com NestJS e possui um CRUD para a tabela inventory.

## Endpoints
Método	   Endpoint	        Descrição
GET	       /inventory    	Lista todos os itens
GET	       /inventory/:id	Busca um item
POST	   /inventory	    Cria um item
PATCH	   /inventory/:id	Atualiza um item
DELETE	   /inventory/:id	Remove um item

Exemplos

GET /inventory
[
  {
    "id": 1,
    "item_code": "ITEM001",
    "description": "Teclado USB",
    "quantity": 20,
    "min_stock": 5
  }
]
POST /inventory
{
  "item_code": "ITEM002",
  "description": "Mouse USB",
  "quantity": 15,
  "min_stock": 5
}
PATCH /inventory/1
{
  "quantity": 30
}

## Swagger

A API possui Swagger para testar os endpoints.

http://localhost:3000/api

## Front-end

O Front-end foi desenvolvido com React.

A tela principal possui uma tabela com os itens do inventário obtidos através do endpoint:

GET /inventory

O Front-end se comunica com a API através da rede interna do Docker Compose.

## Docker

O projeto possui Dockerfiles para:

API NestJS
Front React

O Docker Compose configura:

PostgreSQL
API
Front
Volume do PostgreSQL
Rede API + PostgreSQL
Rede API + Front
Variáveis de ambiente

As informações de conexão com o PostgreSQL são configuradas através de variáveis de ambiente.

## Exemplo:

DB_HOST=postgres
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=inventory
Como parar os containers

Para parar os serviços:

docker compose down

Para parar os serviços e remover os volumes:

docker compose down -v

O comando docker compose down -v remove os dados armazenados no volume do PostgreSQL.


