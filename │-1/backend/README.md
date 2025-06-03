# Truco Paulista Online - Backend Documentation

Este documento fornece uma visão geral do backend do projeto Truco Paulista Online, incluindo instruções de instalação, configuração e uso.

## Estrutura do Projeto

O backend é organizado da seguinte forma:

```
backend/
├── src/
│   ├── server.ts          # Ponto de entrada do servidor Express
│   ├── app.ts             # Configuração principal do aplicativo
│   ├── sockets/           # Lógica de comunicação em tempo real com Socket.io
│   ├── controllers/       # Lógica de controle do jogo
│   ├── models/            # Modelos de dados para MongoDB
│   ├── routes/            # Definição das rotas da API REST
│   ├── utils/             # Funções utilitárias
│   ├── middlewares/       # Middlewares para autenticação e permissões
│   ├── services/          # Lógica de negócios e interações com o banco de dados
│   ├── types/             # Tipos e interfaces TypeScript
│   └── tests/             # Testes automatizados
├── package.json            # Configuração do npm
├── tsconfig.json           # Configuração do TypeScript
└── README.md               # Documentação do backend
```

## Instalação

1. **Clone o repositório:**

   ```
   git clone <URL_DO_REPOSITORIO>
   cd truco-paulista-online/backend
   ```

2. **Instale as dependências:**

   ```
   npm install
   ```

3. **Configuração do Banco de Dados:**

   Certifique-se de que o MongoDB esteja configurado e acessível. Atualize as credenciais no arquivo de configuração apropriado.

4. **Inicie o servidor:**

   ```
   npm start
   ```

## Uso

Após iniciar o servidor, você pode acessar a API através do endereço `http://localhost:PORT`, onde `PORT` é a porta configurada no arquivo `server.ts`.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## Licença

Este projeto está licenciado sob a MIT License. Veja o arquivo LICENSE para mais detalhes.