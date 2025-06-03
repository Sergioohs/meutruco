import { Request, Response, NextFunction } from 'express';

// Função para validar se um valor é um número
export const isNumber = (value: any): boolean => {
    return typeof value === 'number' && !isNaN(value);
};

// Função para validar se um valor é uma string não vazia
export const isNonEmptyString = (value: any): boolean => {
    return typeof value === 'string' && value.trim().length > 0;
};

// Função para enviar uma resposta de erro
export const sendErrorResponse = (res: Response, message: string, statusCode: number = 400): void => {
    res.status(statusCode).json({ error: message });
};

// Função para enviar uma resposta de sucesso
export const sendSuccessResponse = (res: Response, data: any, message: string = 'Success'): void => {
    res.status(200).json({ message, data });
};

// Middleware para verificar se o usuário está autenticado
export const isAuthenticated = (req: Request, res: Response, next: NextFunction): void => {
    if (req.isAuthenticated()) {
        return next();
    }
    sendErrorResponse(res, 'User not authenticated', 401);
};