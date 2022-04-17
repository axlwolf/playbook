// logger.js

// Funcion que se fuardara en este modulo como info
exports.info = (message) => {
    console.log(`info: ${message}`);
};


// Funcion que se guardara en este modulo como verbose
exports.verbose = (message) => {
    console.log(`verbose: ${message}`);
};

/*
Ex:
  const logger = require('./logger')
  logger.info('This is an informational message')
  logger.verbose('This is a verbose message')
 * */