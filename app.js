const colors = require('colors');

const argv = require('./config/yarcs').argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(lectura => {
                console.log('================='.green);
                console.log(`tabla de ${argv.base}`.green);
                console.log('================='.green);
                console.log(lectura);
            })
            .catch(e => console.log(e))
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo creado:', `${archivo}`.green))
            .catch(e => console.log(e))
        break;
    default:
        console.log('Comando no reconocido');
        break;
}

//console.log(argv);

//let base = '2';
//let argv = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1];

/*
crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(e => console.log(e)) */