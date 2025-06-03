import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import app from './app';
import { createServer } from 'http';

const PORT = process.env.PORT || 3000;

const server = createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });

    // Additional socket event handlers can be added here
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});