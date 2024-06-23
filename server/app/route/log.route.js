import logController from '../controller/logController.js';
import broadcastController from '../controller/broadcastController.js';

const { getCommons, updateCommons } = logController;
const {getBroadcasts, addBroadcast, editBroadcast, getDetailedBroadcast, getDetailedBroadcasts} = broadcastController;

export default (app) => {

    app.get('/commons/:logName', getCommons);

    app.put('/commons/:logName/edit', updateCommons);

    app.get('/broadcasts/:logName', getBroadcasts)

    app.post('/broadcast/add', addBroadcast);

    app.put('/broadcast/edit', editBroadcast)

    app.get('/detailedbroadcast/:id', getDetailedBroadcast)
    
    app.get('/detailedbroadcasts/:logName/:username', getDetailedBroadcasts)
}