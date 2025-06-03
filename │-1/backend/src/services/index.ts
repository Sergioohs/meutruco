import { Request, Response } from 'express';
import { Player, Game } from '../models'; // Importando os modelos necessários

class GameService {
    async createGame(playerIds: string[]): Promise<Game> {
        // Lógica para criar uma nova partida
        const game = new Game({ players: playerIds, status: 'waiting' });
        await game.save();
        return game;
    }

    async joinGame(gameId: string, playerId: string): Promise<Game | null> {
        // Lógica para um jogador entrar em uma partida
        const game = await Game.findById(gameId);
        if (game && game.players.length < 4) {
            game.players.push(playerId);
            await game.save();
            return game;
        }
        return null;
    }

    async startGame(gameId: string): Promise<Game | null> {
        // Lógica para iniciar uma partida
        const game = await Game.findById(gameId);
        if (game && game.players.length >= 2) {
            game.status = 'in_progress';
            await game.save();
            return game;
        }
        return null;
    }

    async endGame(gameId: string): Promise<Game | null> {
        // Lógica para encerrar uma partida
        const game = await Game.findById(gameId);
        if (game) {
            game.status = 'finished';
            await game.save();
            return game;
        }
        return null;
    }

    async getPlayerStats(playerId: string): Promise<any> {
        // Lógica para obter estatísticas de um jogador
        const player = await Player.findById(playerId);
        return player ? player.stats : null;
    }
}

export default new GameService();