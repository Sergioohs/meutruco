import { Server } from "socket.io";
import { createServer } from "http";
import { app } from "../app"; // Importa a instância do Express

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*", // Permite conexões de qualquer origem
    methods: ["GET", "POST"],
  },
});

// Evento de conexão
io.on("connection", (socket) => {
  console.log(`Usuário conectado: ${socket.id}`);

  // Evento de desconexão
  socket.on("disconnect", () => {
    console.log(`Usuário desconectado: ${socket.id}`);
  });

  // Aqui você pode adicionar mais eventos para gerenciar a lógica do jogo
});

// Exporta a instância do Socket.io para uso em outros módulos
export { io };