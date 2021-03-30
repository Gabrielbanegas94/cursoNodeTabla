const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, listar = false, hasta = 10) => {

    try {


        let salida, consola = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} X ${i} = ${base * i}\n`;
            consola += `${base} ${'X'.cyan} ${i} ${'='.blue} ${base * i}\n`;

        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        if (listar) {
            console.log("================".green);
            console.log(`Tabla del `.green, colors.blue(base));
            console.log("================".green);
            console.log(consola);
        }
        return "tabla creada";
    } catch (error) {
        throw error;
    }

}

module.exports = {
    crearArchivo
}