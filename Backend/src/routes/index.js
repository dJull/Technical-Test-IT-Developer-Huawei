import { Router } from 'express';
import { UsersController } from '../api/users.js';

const Routes = () => {
    const router = Router();
    const controller = new UsersController();
    // Endpoint to get data from json
    router.get('/', controller.getUser.bind(controller));
    // Endpoint to save data to json
    router.post('/', controller.addUser.bind(controller));

    return router;
};

export default Routes;
