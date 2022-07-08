//configuarciones de express, todo lo que falta que se cargue, antes de que inicie la app

const ExpressServer = require('./server/ExpressServer');
const logger = require('./logger');

const config = require('../config');

module.exports = async () => {
    const server = new ExpressServer();
    logger.info("Express cargado");
    server.start();
    logger.info(`Servidor esta en el puerto: ${config.port}`);
}

