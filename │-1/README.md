# Truco Paulista Online

Este projeto é um jogo de Truco Paulista online, acessível via navegador, que permite partidas multiplayer, tanto amistosas quanto com fichas virtuais. O jogo segue rigorosamente as regras oficiais do Truco Paulista e oferece uma experiência completa e imersiva para os jogadores.

## Funcionalidades

- **Partidas Multiplayer**: Jogue com amigos ou jogadores de todo o mundo em salas públicas ou privadas.
- **Sistema de Fichas Virtuais**: Partidas com fichas virtuais, com saldo inicial configurável e sistema de recompensas.
- **Ranking e Estatísticas**: Acompanhe seu desempenho e compare-se com outros jogadores.
- **Painel de Administração**: Ferramentas para gerenciar jogadores, salas e torneios, com logs detalhados.
- **Comunicação em Tempo Real**: Chat interno e notificações para eventos importantes durante o jogo.

## Tecnologias Utilizadas

- **Backend**: Node.js com Express para a API REST e lógica do jogo.
- **Frontend**: Next.js para uma interface moderna e responsiva.
- **Banco de Dados**: MongoDB para armazenamento de dados.
- **Comunicação**: Socket.io para comunicação em tempo real.
- **Estilização**: Tailwind CSS para um design responsivo e acessível.
- **Containerização**: Docker e Docker Compose para facilitar o deploy e a manutenção.

## Instalação

1. Clone o repositório:
   ```
   git clone <URL_DO_REPOSITORIO>
   cd truco-paulista-online
   ```

2. Instale as dependências do backend:
   ```
   cd backend
   npm install
   ```

3. Instale as dependências do frontend do jogador:
   ```
   cd ../frontend-player
   npm install
   ```

4. Instale as dependências do frontend do administrador:
   ```
   cd ../frontend-admin
   npm install
   ```

5. Configure o ambiente e inicie os serviços usando Docker:
   ```
   docker-compose up
   ```

## Uso

Após a instalação, acesse o jogo através do navegador em `http://localhost:3000` para o frontend do jogador ou `http://localhost:3001` para o painel administrativo.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## Licença

Este projeto está licenciado sob a MIT License. Veja o arquivo LICENSE para mais detalhes.