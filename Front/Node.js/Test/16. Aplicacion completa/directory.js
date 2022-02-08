const fs = require('fs');
const path = require('path');

class Directory{

    constructor(){
        this._dir = 'docs';
        this._path = __dirname;
        this.createDocsDir();
    }

    //Función con la que creamos el directorio en el que guardaremos los documentos.
    createDocsDir(){
        this._path = path.join(this._path, this._dir);

        if (!fs.existsSync(this._dir)){
            fs.mkdirSync(this._dir);
        }
    }

    //Obtención del path completo.
    getPath(){
        return this._path;
    }


    //Mostraremos parte de la ruta solo.
    getShortPath(){
        const paths = path.parse(this._path);
        let delimiter = '/';
        //Si usa Windows, es posible que use \ para la ruta.
        if (paths.dir.indexOf(delimiter)< 0){
            delimiter = `\\`;
        }

        return `${paths.root}...${delimiter}${paths.name}`;
    }

    //Interfaz para visualizar los ficheros de esa carpeta.
    getFilesInDir(){
        const files = fs.readdirSync(this._path);
        let n = 1;
        console.log(`
====================================
Ubicación: ${this.getShortPath()}
====================================`);

        files.forEach(file =>{
                console.log(`${n} ---> ${file}`);
                n++;
        })
    }
}

module.exports = Directory;