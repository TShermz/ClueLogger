import authController from '../controller/authController.js';

const { getSession, login, register, logout } = authController;

export default (app) => {

    //Homepage
    app.get('/', getSession);

    //Access My Log
    app.get('/mylog')

    //Login
    app.post('/login', login);

    //Register
    app.post('/signup', register);

    app.get('/logout', logout);
}