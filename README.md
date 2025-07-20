# API de Entregas

API REST para gerenciamento de entregas desenvolvida com Node.js, Express, Prisma e PostgreSQL.

## Tecnologias

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [JWT](https://jwt.io/)
- [Jest](https://jestjs.io/pt-BR/)

## Funcionalidades

- Autenticação de usuários (JWT)
- Cadastro de usuários (clientes e vendedores)
- Gerenciamento de entregas
- Registro de status de entregas
- Histórico de alterações nas entregas

## Estrutura do Projeto

```plaintext
src/
  ├── configs/        # Configurações (auth, etc)
  ├── controllers/    # Controladores da aplicação
  ├── database/       # Configuração do Prisma
  ├── middlewares/    # Middlewares Express
  ├── routes/         # Rotas da API
  ├── tests/          # Testes de integração
  ├── types/         # Tipos TypeScript
  └── utils/         # Utilitários
```

## Instalação

```bash
# Clone o repositório
git clone https://github.com/giigio/delivery-api.git

# Entre na pasta do projeto
cd delivery-api

# Instale as dependências
pnpm install

# Configure as variáveis de ambiente
cp .env.example .env

# Execute as migrations
pnpm prisma migrate dev

# Inicie o servidor
pnpm dev

```

## Testes

```bash
# Executar testes
pnpm test

# Executar testes em watch mode
pnpm test:watch
```

## Endpoints

### Usuários

- `POST /users` - Criar novo usuário
- `POST /sessions` - Autenticar usuário

### Entregas

- `POST /deliveries` - Criar nova entrega
- `GET /deliveries` - Listar entregas
- `PATCH /deliveries/:id/status` - Atualizar status da entrega

### Logs de Entrega

- `GET /deliveries/:id/logs` - Histórico de uma entrega
- `POST /deliveries/:id/logs` - Adicionar log à entrega
