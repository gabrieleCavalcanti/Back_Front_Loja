# Sistema de Gerenciamento de Produtos

Aplicação web desenvolvida com JavaScript, HTML, CSS.

## Funcionalidades

- Listar produtos
- Cadastrar produtos
- Atualizar produtos
- Remover produtos
- Cadastrar categorias
- Listar categorias em ordem alfabética

---

# Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
---

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

## 4. Configurar banco MySQL

Script

## 5. Configurar variáveis ambiente

Criar arquivo `.env`

```env
SERVER_PORT=8000

DB_HOST=localhost
DB_PORT=3306
DB_DATABASE=loja_back_front
DB_USER=seu_user
DB_PASSWORD=sua_senha
```

## 6. Executar servidor

```bash
nodemon .\src\server.ts
```

Servidor disponível em:

```bash
http://localhost:8000
```

## 7. Executar front-end

Abrir o arquivo:

```bash
index.html
```

ou usar Live Server no VSCode.

---

# Endpoints disponíveis

## Produtos

### Listar produtos

```http
GET /produtos
```

### Cadastrar produto

```http
POST /produtos
```

### Atualizar produto

```http
PATCH /produtos?id={id}
```

### Remover produto

```http
DELETE /produtos?id={id}
```

---

## Categorias

### Listar categorias

```http
GET /categorias/alfabetica
```

### Cadastrar categoria

```http
POST /categorias
```

---

# Exemplos de uso

## Criar categoria

### Requisição

```json
{
    "nome": "Bebidas"
}
```

### Resposta

```json
{
    "message": "Categoria criada com sucesso"
}
```

---

## Criar produto

### Requisição

```json
{
    "nome": "Coca-Cola",
    "valor": 5.00,
    "idCategoria": 1
}
```

### Resposta

```json
{
    "message": "Produto criado com sucesso"
}
```

---

## Buscar produtos

### Resposta

```json
{
    "produtos": [
        {
            "id": 1,
            "nome_produto": "Coca-Cola",
            "valor": "5.00",
            "categoria": "Bebidas"
        }
    ]
}
```

---

## Atualizar produto

### Requisição

```json
{
    "nome": "Coca-Cola Zero",
    "valor": 6.00,
    "idCategoria": 1
}
```

---

## Remover produto

```http
DELETE /produtos?id=1
```

---