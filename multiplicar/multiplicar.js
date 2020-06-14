const fs = require('fs');

let listarTabla = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La base "${base}" no es un número`);
            return;
        }

        if (!Number(limite)) {
            reject(`El límite "${limite}" no es un número`);
            return;
        }

        fs.readFile(`tablas/tabla-${base}`, 'utf8', (err, data) => {

            if (err) reject(err);
            else {

                let resultado = data.substring(0, data.lastIndexOf(`${base} * ${limite + 1}`));
                data.split['\n'];
                resolve(resultado)
            }

        });
    });

}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El parámetro ingresado "${base}" no es un número`);
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}`, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla-${base}.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}