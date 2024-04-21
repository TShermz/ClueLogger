import logController from '../controller/logController.js';

const { getLog } = logController;

export default (app) => {

    app.get('/mylog/:logName', getLog);

}