import fs from 'fs';
import path from 'path';
import { responseData } from '../utils/responses.js';
import user from '../database/user.js'
import config from '../config/index.js';

export class UsersController {
    async getUser(req, res, next) {
        try {
            console.log(user);
            res.status(200).json(responseData({ data: user }));
        } catch (error) {
            next(error);
        }
    }
    async addUser(req, res, next) {
        try {
            user.push(req.body)
            console.log(user);
            res.status(200).json(responseData({ data: req.body }));
        } catch (error) {
            next(error);
        }
    }
}

