// backend/src/types/index.ts

export interface Player {
    id: string;
    name: string;
    chips: number;
    status: 'online' | 'offline';
}

export interface Game {
    id: string;
    players: Player[];
    pot: number;
    currentBet: number;
    status: 'waiting' | 'in_progress' | 'finished';
}

export interface Move {
    playerId: string;
    action: 'call' | 'raise' | 'fold' | 'trick';
    amount?: number;
}

export interface Tournament {
    id: string;
    name: string;
    players: Player[];
    rounds: Round[];
    status: 'scheduled' | 'ongoing' | 'completed';
}

export interface Round {
    id: string;
    games: Game[];
    status: 'waiting' | 'in_progress' | 'finished';
}

export interface ChipTransaction {
    playerId: string;
    amount: number;
    type: 'win' | 'loss' | 'entry_fee' | 'reward';
    timestamp: Date;
}