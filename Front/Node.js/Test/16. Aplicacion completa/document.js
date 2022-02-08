const fs = require('fs');
const os = require('os');

class Document{

    constructor(dir){
        this._content ='';
        this._isSaved = false;
        this._filename = '';
        this._dir = dir;
    }

    //Comprobar si existe el documento.
    exists(name){
        return fs.existsSync(`${this._dir}/${name}`);
    }

    //Añadir contenido al documento.
    append(text){
        this._content += os.EOL + text;
        this._isSaved = false; //Al añadir contenido, no está guardado.
    }

    //Guardar el contenido con un nombre nuevo.
    saveAs(name){
        fs.writeFileSync(`${this._dir}/${name}`, this._content);

        this._isSaved = true;
        this._filename = name;
    }

    //Guardar el contenido.
    save(){
        fs.writeFileSync(`${this._dir}/${this._filename}`, this._content);

        this._isSaved = true;
        this._filename = this._filename;
        }

    //Obtener contenido del fichero.
    getContent(){
        return this._content;
    }

    //Comprobar si el documento tiene nombre.
    hasName(){
        if(this._filename != ''){
            return true;
        }else{
            return false;
        }
    }
    getName(){
        return this._filename;
    }

    isSaved(){
        return this._isSaved;
    }

    //Abrimos el documento.
    open(name){
        this._content = fs.readFileSync(`${this._dir}/${name}`, 'UTF-8');
        this._filename = name;
        this._isSaved = true;
        return this._content;
    }
}

module.exports = Document;