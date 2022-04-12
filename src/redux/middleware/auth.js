export const authMiddleware = store => next => action => {
    const token = localStorage.token;
    console.log(token);
    next(action);
} 