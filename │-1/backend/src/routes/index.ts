import { Router } from 'express';
import { GameController } from '../controllers/index';

const router = Router();
const gameController = new GameController();

// Rotas para gerenciamento de partidas
router.post('/games', gameController.createGame);
router.get('/games/:id', gameController.getGame);
router.put('/games/:id', gameController.updateGame);
router.delete('/games/:id', gameController.deleteGame);

// Rotas para gerenciamento de jogadores
router.post('/players', gameController.createPlayer);
router.get('/players/:id', gameController.getPlayer);
router.put('/players/:id', gameController.updatePlayer);
router.delete('/players/:id', gameController.deletePlayer);

// Rotas para gerenciamento de fichas
router.post('/chips', gameController.createChips);
router.get('/chips/:playerId', gameController.getChips);
router.put('/chips/:playerId', gameController.updateChips);

// Exporta as rotas
export default router;