import config from './config/index.js';
import expressApp from './app.js';

const startServer = async () => {
    try {
        const app = await expressApp();
        app.listen(config.app.port, () => {
            console.log(
                `[${config.app.name}] listening to port ${config.app.port}`,
            );

        }).on('error', (err) => {
            console.log(err);
            process.exit();
        });

    } catch (error) {
        console.log('ERROR', error);
    }
};

startServer();
