export interface AppError extends Error {
    statusCode: number;
}

export class InternalServerError implements AppError {  // inherits from Error
    statusCode: number;
    message: string;
    name: string;

    constructor(message: string) {
        this.statusCode = 500;
        this.message = message;
        this.name = 'InternalServerError';
    }
}

export class NotFoundError implements AppError {
    statusCode: number;
    message: string;
    name: string;

    constructor(message: string) {
        this.statusCode = 404;
        this.message = message;
        this.name = 'NotFoundError';
    }
}

export class BadRequestError implements AppError {
    statusCode: number;
    message: string;
    name: string;

    constructor(message: string) {
        this.statusCode = 400;
        this.message = message;
        this.name = 'BadRequestError';
    }
}   

export class UnauthorizedError implements AppError {
    statusCode: number;
    message: string;
    name: string;

    constructor(message: string) {
        this.statusCode = 401;
        this.message = message;
        this.name = 'UnauthorizedError';
    }
}