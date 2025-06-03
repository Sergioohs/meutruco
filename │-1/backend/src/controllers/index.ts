import { Request, Response } from 'express';
import { GameService } from '../services/GameService';
import { PlayerService } from '../services/PlayerService';

class GameController {
    private gameService: GameService;
    private playerService: PlayerService;

    constructor() {
        this.gameService = new GameService();
        this.playerService = new PlayerService();
    }

    public async createGame(req: Request, res: Response): Promise<void> {
        try {
            const game = await this.gameService.createGame(req.body);
            res.status(201).json(game);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    public async joinGame(req: Request, res: Response): Promise<void> {
        try {
            const game = await this.gameService.joinGame(req.params.gameId, req.body.playerId);
            res.status(200).json(game);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    public async getGameStatus(req: Request, res: Response): Promise<void> {
        try {
            const gameStatus = await this.gameService.getGameStatus(req.params.gameId);
            res.status(200).json(gameStatus);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    public async endGame(req: Request, res: Response): Promise<void> {
        try {
            const result = await this.gameService.endGame(req.params.gameId);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    // Additional methods for player management can be added here
}

export default new GameController();