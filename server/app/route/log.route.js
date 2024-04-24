import logController from '../controller/logController.js';

const { getLog, updateCommons } = logController;

export default (app) => {

    app.get('/mylog/:logName', getLog);

    app.put('/commons/:logName/edit', updateCommons);

}