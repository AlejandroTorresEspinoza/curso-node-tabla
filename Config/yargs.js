//Ejemplo 1
/*const argv = require('yargs')
     .option('b', {
      alias: 'base',
      type: 'number',
      demandOption: true
      })
      .check((argv, options ) => {
      if(isNaN(argv.b)){
        throw 'La base debe ser un Numero'
        }
          return true;
      })
      .option('l', {
         alias: 'listar',
         type: 'boolean',
         default: false
        })
                 
    .argv;
module.exports = argv;*/


//Ejemplo 2
/*const argv = require('yargs')
     .option('b', {
      alias: 'base',
      type: 'number',
      demandOption: true,
      describe: 'Es la base de la tabla de multiplicaf'
      })
      .check((argv, options ) => {
      if(isNaN(argv.b)){
        throw ';La base debe ser un Numero'
        }
          return true;
      })
      .option('l', {
         alias: 'listar',
         type: 'boolean',
         default: false,
         describe: 'Muestra la tabla en consola'
        })
                 
    .argv;
module.exports = argv;*/


//Ejemplo 3
const argv = require('yargs')
     .option('h',{
              alias: 'hasta',
              type: 'number',
              default: 19,
              describe: 'Indicador del alcance del Multiplicador'
            })
            .check((argv, options)=> {
              if(isNaN(argv.h)){
                throw 'El multiplicador debe ser un Numero'
                }
               
                return true;
            })
      .check((argv, options ) => {
      if(isNaN(argv.b)){
        throw ';La base debe ser un Numero'
        }
          return true;
      })
      .option('l', {
         alias: 'listar',
         type: 'boolean',
         default: false,
         describe: 'Muestra la tabla en consola'
        })
                 
    .argv;
module.exports = argv;