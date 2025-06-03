import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import routes from './routes';
import middlewares from './middlewares';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Middleware
app.use(express.json());
app.use(middlewares);

// Routes
app.use('/api', routes);

// Socket.io configuration
io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });

    // Additional socket events can be handled here
});

// Export the app and server for use in server.ts
export { app, server, io };