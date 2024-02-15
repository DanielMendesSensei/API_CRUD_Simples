# API CRUD SIMPLES COM SQLITE
Uma API simples que cadastra no banco de dados Sqlite os dados de uma pessoa, sendo um CRUD completo. O intuito dessa API é para uso didático.

## Documentação

#### Retorna todas as pessoas cadastradas

```http
  GET /pessoas
```
#### Retorna uma pessoa mediante a parâmetros

```http
  GET /pessoa/nome
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `nome`      | `string` | **Obrigatório**. O Nome da pessoa na qual você quer acessar. |

#### Registrar Pessoa
```http
  POST /pessoa
```

| Body   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `nome`      | `string` | O máximo de caracteres permitidos é de 60. |
| `idade` | `integer` | **idade** da pessoa.

#### Atualizar Pessoa
```http
  PATCH /pessoa
```
| Body   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `nome`      | `string` | Nome da pessoa na qual a idade será atualizada. |
| `idade` | `integer` | **idade** atual da pessoa.

#### Deletar Pessoa
```http
  DELETE /pessoa/id
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `integer` | **Obrigatório**. O ID da pessoa na qual você deseja deletar. |
| `nome`      | `string` | **Obrigatório**. O nome (no BODY) da pessoa na qual você deseja deletar. |

## Stack utilizada

**Back-end:** Node, Express, Sqlite3


## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/DanielMendesSensei/API_CRUD_Simples
```
Instale as dependências
```bash
  npm i
```

Inicie o servidor

```bash
  npm run dev
```

