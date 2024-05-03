import logController from '../controller/logController.js';

const { getLog, updateCommons, getBroadcasts, addBroadcast, getBroadcastById } = logController;

export default (app) => {

    app.get('/mylog/:logName', getLog);

    app.put('/commons/:logName/edit', updateCommons);

    app.get('/broadcasts', getBroadcasts)

    app.post('/broadcast/add', addBroadcast);

    app.put('/broadcast/edit/:broadcastId', getBroadcastById);
}