import { Schema, model } from 'mongoose';

const playerSchema = new Schema({
    username: { type: String, required: true, unique: true },
    chips: { type: Number, default: 1000 },
    wins: { type: Number, default: 0 },
    losses: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now }
});

const gameSchema = new Schema({
    players: [{ type: Schema.Types.ObjectId, ref: 'Player' }],
    pot: { type: Number, default: 0 },
    winner: { type: Schema.Types.ObjectId, ref: 'Player' },
    status: { type: String, enum: ['waiting', 'in_progress', 'finished'], default: 'waiting' },
    createdAt: { type: Date, default: Date.now }
});

const chipSchema = new Schema({
    player: { type: Schema.Types.ObjectId, ref: 'Player' },
    amount: { type: Number, required: true },
    transactionType: { type: String, enum: ['win', 'loss'], required: true },
    createdAt: { type: Date, default: Date.now }
});

const Player = model('Player', playerSchema);
const Game = model('Game', gameSchema);
const Chip = model('Chip', chipSchema);

export { Player, Game, Chip };