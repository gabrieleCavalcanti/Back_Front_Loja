# 🛒 Loja POO

Projeto de **CRUD de Produtos e Categorias** utilizando **POO (Programação Orientada a Objetos)** em **TypeScript**, **Express** e **MySQL**.

---

## ⚙️ Tecnologias

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [MySQL](https://www.mysql.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)

---

## 📦 Instalação

1. Inicializar projeto Node.js:

```bash
npm init -y

npm install -D typescript ts-node @types/express @types/node nodemon

npm i express mysql2 dotenv

npx tsc --init
```

## Configuração do tsconfig.json:

```bash
{
  "compilerOptions": {
    "target": "ES2023",
    "module": "CommonJS",
    "moduleResolution": "node",
    "lib": ["ES2023"],
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true,
    "types": ["node", "express"],
    "outDir": "./dist",
    "rootDir": "./src",
    "sourceMap": true
  },
  "include": ["src"]
}
```

## 📂 Estrutura do Projeto

```bash
Loja_poo_ems/
│
├─ src/
│  ├─ config/
│  │  └─ enum/          # Enumerador das variáveis do .env
│  ├─ models/            # Validação dos dados
│  ├─ services/          # Regras de negócio
│  ├─ controllers/       # Controladores do CRUD
│  ├─ routes/            # Rotas da API
│  └─ index.ts           # Arquivo principal
│
├─ .env                  # Variáveis de ambiente
├─ package.json
├─ tsconfig.json
└─ README.md

```

## 💡 Funcionalidades
### Categorias

* Criar categoria
* Listar todas categorias em ordem alfabética


### Com os seguintes campos:
- id
- nome


## 💡 Funcionalidades:
### Produtos

* Criar produto
* Listar produtos
* Atualizar produto
* Excluir produto 

### CRUD completo com os seguintes campos:
- id
- nome
- valor
- idCategoria


# Instruções de execução

## 1. Clonar o projeto

```bash
git clone <url-do-repositorio>
```

## 2. Entrar na pasta

```bash
cd nome-do-projeto
```

## 3. Instalar dependências

```bash
npm install
```

## 4. Configurar variáveis ambiente

Criar arquivo `.env`

```env
SERVER_PORT=8000

DB_HOST=localhost
DB_PORT=3306
DB_DATABASE=loja_back_front
DB_USER=seu_user
DB_PASSWORD=sua_senha
```

## 5. Executar servidor

```bash
nodemon .\src\server.ts
```

Servidor disponível em:

```bash
http://localhost:8000
```
