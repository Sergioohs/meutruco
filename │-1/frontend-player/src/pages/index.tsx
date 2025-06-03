import React from 'react';

const HomePage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Bem-vindo ao Truco Paulista Online!</h1>
            <p className="text-lg mb-8">Junte-se a partidas emocionantes e desafie seus amigos!</p>
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Iniciar Jogo
            </button>
        </div>
    );
};

export default HomePage;