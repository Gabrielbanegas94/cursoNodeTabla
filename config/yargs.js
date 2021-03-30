const colors = require('colors');

const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'base tabla multiplicar'

    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'limite de tabla'

    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: true,
        default: false,
        describe: 'muestra la tabla'

    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser numero'
        }
        return true;
    })
    .argv;

module.exports = argv;