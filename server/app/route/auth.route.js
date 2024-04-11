import authController from '../controller/authController.js';

const { isAuthenticated,login, register } = authController;

export default (app) => {

    //Homepage
    app.get('/', (req, res) => {
        console.log('this is session: ' + req.session);
        console.log('this is cookies: ' + req.cookies);
    });

    //Access My Log
    app.get('/mylog', isAuthenticated)

    //Login
    app.post('/login', login);

    //Register
    app.post('/signup', register);

}