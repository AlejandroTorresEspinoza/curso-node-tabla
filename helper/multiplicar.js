//Ejemplo 1
// funcion que realiza la multiplicación
/*const fs = require('fs'); // se exporta la libreria para poder hacer yso del file system
const crearArchivo = ( j = 5 ) =>{
    console.log('=============');
    console.log('  Tabla del: ', j);
    console.log('=============');
    let salida = '';
    for(i = 1;i<=10;i++){
        salida += `${j} x ${i} = ${j * i}\n`; //la salida se concatena y se da un salto de linea.
       
    }
    console.log(salida);
    //el file system para grabar un archivo. usando WriteFileSync
    //cono se ejecuta de manera asincrona ya no va el error.
    //Paraq controlar el error se usa try - catch.
    fs.writeFileSync(`tabla-del-${j}.txt` , salida);
    console.log(`Tabla del ${j} Creado`);
}
module.exports = {
        crearArchivo
    }*/


//Ejemplo 2
// funcion que realiza la multiplicacion
/*const fs = require('fs'); // se exporta la libreria para poder hacer yso del file system
const { resolve } = require('path');
const crearArchivo = ( j = 5 ) =>{
    const promesa = new Promise((resolve, reject) => {
        console.log('=============');
        console.log('  Tabla del: ', j);
        console.log('=============');
        let salida = '';
        for(i = 1;i<=10;i++){
            salida += `${j} x ${i} = ${j * i}\n`; //la salida se concatena y se da un salto de linea.
           
        }
   
        console.log(salida);
        //el file system para grabar un archivo. usando WriteFileSync
        //como se ejecuta de manera asincrona ya no va el error.
        //Para controlar el error se usa try - catch.
        fs.writeFileSync(`tabla-del-${j}.txt` , salida);
       
        let nombreArchivo = `Tabla del ${j}`;
        (nombreArchivo)
            ?resolve(nombreArchivo)
            :reject (`No existe ${nombreArchivo}`);
   
    });
      return promesa;
   
}
module.exports = {
    crearArchivo
}*/


//Ejemplo 3 --> Manera mas corta
// funcion que realiza la multiplicacion
// funcion que realiza la multiplicacion
/*const fs = require('fs');
const { resolve } = require('path');
const crearArchivo = async ( j = 5 ) =>{
        try {
            console.log('=============');
            console.log('  Tabla del: ', j);
            console.log('=============');
            let salida = '';
            for(i = 1;i<=10;i++){
                salida += `${j} x ${i} = ${j * i}\n`;
           
             }
   
            console.log(salida);
       
            fs.writeFileSync(`tabla-del-${j}.txt` , salida);
            return `Tabla del ${j}`;
        } catch (err) {
            throw err;
        }
     
           
    };
module.exports = {
    crearArchivo
}*/


//Ejemplo 4
/*const fs = require('fs');
const { resolve } = require('path');
const crearArchivo = async ( j = 5, listar = true ) =>{
        try {
           
            let salida = ';';
            for(i = 1;i<=10;i++){
                salida += `${j} x ${i} = ${j * i}\n`;
           
             }
             if(listar){
                console.log('=============');
                console.log('  Tabla del: ', j);
                console.log('=============');
                console.log(salida);
             }
           
       
            fs.writeFileSync(`tabla-del-${j}.txt` , salida);
            return `Tabla del ${j}`;
        } catch (err) {
            throw err;
        }
     
           
    };

     
module.exports = {
    crearArchivo
}*/


//Ejemplo 5 --> Implementando colores
/*const fs = require('fs');
const colors = require('colors');
const { resolve } = require('path');
const crearArchivo = async ( j = 5, listar = true ) =>{
        try {
           
            let salida = '';
            for(i = 1;i<=10;i++){
                salida += `${j} x ${i} = ${j * i}\n`;

           
             }
             if(listar){
                console.log('============='.green);
                console.log('  Tabla del: ', colors.blue(j) );
                console.log('============='.blue);
                console.log(salida);
             }
           
       
            fs.writeFileSync(`tabla-del-${j}.txt` , salida);
            return `Tabla del ${j}`;
        } catch (err) {
            throw err;
        }
     
           
    };
module.exports = {
        crearArchivo
    }*/


//Ejemplo 6 --> Implementando color en la "x"
/*const fs = require('fs');
const colors = require('colors');
const { resolve } = require('path');
const crearArchivo = async ( j = 5, listar = true ) =>{
        try {
           
            let salida = '';
            for(i = 1;i<=10;i++){
                    salida += `${j} ${'x'.green} ${i} ${'='.green} ${j * i}\n`;

           
             }
             if(listar){
                console.log('============='.green);
                console.log('  Tabla del: ', colors.blue(j) );
                console.log('============='.blue);
                console.log(salida);
             }
           
       
            fs.writeFileSync(`tabla-del-${j}.txt` , salida);
            return `Tabla del ${j}`;
        } catch (err) {
            throw err;
        }
     
           
    };
module.exports = {
        crearArchivo
    }*/


//Ejemplo 7
/*const fs = require('fs');
const colors = require('colors');
const { resolve } = require('path');
const crearArchivo = async ( j = 5, listar = true, hasta=10 ) =>{
        try {
           
            let salida = '';
            for(i = 1;i<=hasta;i++){
                    salida += `${j} ${'x'.green} ${i} ${'='.green} ${j * i}\n`;

           
             }
             if(listar){
                console.log('============='.green);
                console.log('  Tabla del: ', colors.blue(j) );
                console.log('============='.blue);
                console.log(salida);
             }
           
       
            fs.writeFileSync(`tabla-del-${j}.txt` , salida);
            return `Tabla del ${j}`;
        } catch (err) {
            throw err;
        }
     
           
    };
module.exports = {
        crearArchivo
    }*/


//Ejemplo 8
/*const fs = require('fs');
const colors = require('colors');
const { resolve } = require('path');
const crearArchivo = async ( j = 5, listar = true, hasta=10 ) =>{
        try {
           
            let salida = '';
            let consola = '';
            for(i = 1;i<=hasta;i++){
                salida += `${j} ${'x'} ${i} ${'='} ${j * i}\n`;
                consola += `${j} ${'x'.green} ${i} ${'='.green} ${j * i}\n`;
           
             }
             if(listar){
                console.log('============='.green);
                console.log('  Tabla del: ', colors.blue(j) );
                console.log('============='.blue);
                console.log(consola);
             }
           
       
            fs.writeFileSync(`tabla-del-${j}.txt` , salida);
            return `Tabla del ${j}`;
        } catch (err) {
            throw err;
        }
     
           
    };
module.exports = {
        crearArchivo
    }*/


//Ejemplo 9
const fs = require('fs');
const colors = require('colors');
const { resolve } = require('path');
const crearArchivo = async ( j = 5, listar = true, hasta=10 ) =>{
        try {
           
            let salida = '';
            let consola = '';
            for(i = 1;i<=hasta;i++){
                salida += `${j} ${'x'} ${i} ${'='} ${j * i}\n`;
                consola += `${j} ${'x'.green} ${i} ${'='.green} ${j * i}\n`;
           
             }
             if(listar){
                console.log('============='.green);
                console.log('  Tabla del: ', colors.blue(j) );
                console.log('============='.blue);
                console.log(consola);
             }
           
       
            fs.writeFileSync(`./salida/tabla-del-${j}.txt` , salida);
            return `Tabla del ${j}`;
        } catch (err) {
            throw err;
        }
     
           
    };
module.exports = {
        crearArchivo
    }