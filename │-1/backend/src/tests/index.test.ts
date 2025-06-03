import { describe, it, expect } from 'jest';
import { someFunction } from '../utils'; // Exemplo de função a ser testada

describe('Testes do Backend', () => {
    it('deve retornar o valor esperado da função', () => {
        const result = someFunction();
        expect(result).toBe('valor esperado'); // Substitua pelo valor esperado
    });

    // Adicione mais testes conforme necessário
});