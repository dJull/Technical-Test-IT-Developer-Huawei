import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import Routes from './routes/index.js';

export default async () => {
    const app = express();
    app.use(cors({ origin: '*' }));
    app.use(express.json());

    app.use(
        morgan(':method :url :status :res[content-length] - :response-time ms'),
    );
    morgan.token('param', function (req, res, param) {
        return req.params[param];
    });

    app.use(Routes());

    // Checking if API enpoint not found
    app.use((req, res, next) => {
        const error = new Error("API endpoint doesn't exist!");
        error.statusCode = 404;
        error.status = 'Not Found';
        next(error);
    });

    // Error handler middleware
    app.use((error, req, res, _) => {
        console.log('error', error);
        const message = !error.statusCode
            ? 'Internal Server Error'
            : error.message;
        res.status(error.statusCode || 500).json({
            status: !error.statusCode ? 'Internal Server Error' : error.status,
            data: [],
            message,
        });
    });

    return app;
};
