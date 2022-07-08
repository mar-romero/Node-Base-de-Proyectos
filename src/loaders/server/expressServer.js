//configuracion de como levantr express

const express = require('express');
const swaggerUi = require('swagger-ui-express');
const morgan = require('morgan');
const config = require('../../config');
const logger = require('../logger');


class ExpressServer {
    constructor() {
        this.app = express();
        this.port = config.port;
        this._middleware();
        this._swaggerConfig();
        this.basePathUser = `${config.api.prefix}/users`;
        this._routes();
        this._notFound();
        this._errorHandle();

    }

    _middleware() {
        this.app.use(express.json());
        this.app.use(morgan('tiny'));
    }
    _notFound() {
        this.app.use((req, res, next) => {
            const err = new Error("Not Found")
            err.code = 404;
            next(err);
        })
    }
    _errorHandle() {
        this.app.use((err, req, res, next) => {
            const code = err.code || 500;
            logger.error(`${code} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
            logger.error(err.stack);
            const body = {
                error: {
                    code,
                    message: err.message
                }
            }
            res.status(code).json(body);
        })
    }
    _swaggerConfig() {
        this.app.use(
            config.swagger.path, 
            swaggerUi.serve, 
            swaggerUi.setup(require('../swagger/swagger.json'))
        );
    }
        _routes() {
            this.app.head('/status', (req, res) => {
                res.status(200).end();
            })
            console.table()
            this.app.use(this.basePathUser, require('../../routes/users'));
        }
    async start() {
            this.app.listen(this.port, (error) => {
                if (error) {
                    logger.error(error);
                    process.exit(1);
                    return;
                }
            });
        }
    }

module.exports = ExpressServer;
