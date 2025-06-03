// Este arquivo define tipos e interfaces TypeScript utilizados no frontend do jogador. 
// Ele pode incluir definições para jogadores, partidas, fichas e outras entidades relevantes para o jogo Truco Paulista.

export interface Player {
    id: string;
    name: string;
    chips: number;
    avatarUrl?: string;
}

export interface Game {
    id: string;
    players: Player[];
    currentTurn: number;
    status: 'waiting' | 'in-progress' | 'finished';
    pot: number;
}

export interface ChipTransaction {
    playerId: string;
    amount: number;
    type: 'win' | 'loss' | 'bet';
    timestamp: Date;
}

export interface GameSettings {
    maxPlayers: number;
    initialChips: number;
    entryFee: number;
}

export interface Reward {
    type: 'daily' | 'mission';
    description: string;
    value: number;
    isClaimed: boolean;
}