const readline = require('readline');
const Messages = require('./messages');
const Document = require('./document');
const Directory = require('./directory');

const dir = new Directory();

let interface= readline.createInterface(process.stdin, process.stdout);
//Comandos utilizados para administrar el fichero.
const tools = `Comandos: :q = Salir, :sa = Guardar como, :s = Guardar. 
-----------------------------------------------------`;

const pantalla = `      
                ____                         _ _   
                |  _ \\                      (_) |  
                | |_| | ___  ___  ___  _ __  _| |_ 
                |  _ < / _ \\/ __|/ _ \\| '_ \\| | __|
                | |_| | (_) \\__ \\ (_) | | | | | |_ 
                |____/ \\___/|___/\\___/|_| |_|_|\\__|
                                    
                                    

                        ================
                        Editor de texto.\n
                        ================
                        Elige una opción:\n
                        1. Crear nuevo documento.
                        2. Abrir documento.
                        3. Cerrar editor.\n> `;

mainScreen();

function mainScreen() {
    process.stdout.write('\033c'); //Limpiar pantalla.

    interface.question(pantalla, res=>{
        switch (res.trim()) {
            case '1':
                createFile(); //Se crea un fichero vacío para que el usuario escriba.
            break;
            case '2':
                openFileInterface(); //Mostramos la carpeta docs y su contenido.
            break;
            case '3':
                interface.close(); //Cerramos la aplicación.
            break;
            default:
                mainScreen();

        }
    });
}

    function createFile(){
        let file = new Document(dir.getPath());

    
        renderInterface(file);
        readCommands(file);
    }

    function renderInterface(file, mensaje){
        process.stdout.write('\033c'); //Limpiar pantalla.
        (file.getName() == '')? console.log(`| Untitled |`): console.log(`| ${file.getName()}`);

        console.log(tools);

        if(mensaje!= null){
            console.log(mensaje);
        }else{
            console.log(file.getContent());
        }
    }

    //Mapear los comandos que se ejecuten.
    function readCommands(file){ 
        interface.on('line', input => {
            switch (input.trim()) {
                case ':sa': //Guardar como.
                        saveAs(file);
                break;
            
                case ':q': //Salir.
                    interface.removeAllListeners('line');
                    mainScreen();
                break;

                case ':s': //Guardar.
                    save(file);
                break;

                default: //Añadir texto.
                    file.append(input.trim());
            }
        });
    }

    function saveAs(file){
        interface.question(Messages.requestFileName, name =>{
            if (file.exists(name)){
                console.log(Messages.fileExists);
                interface.question(Messages.replaceFile, confirm =>{
                    if(confirm = 'y'){
                        file.saveAs(name);
                        renderInterface(file, Messages.fileSaved + '\n');
                    }else{
                        renderInterface(file, Messages.fileNotSaved + '\n');
                    }
                })
            }else{
                //El archivo no existe y debe ser creado
                file.saveAs(name);
                renderInterface(file, Messages.fileSaved);
            }
        });
    }
    //Guardar fichero.
    function save(file){
        if(file.hasName()){
            file.save();
            renderInterface(file, Messages.fileSaved + '\n');
        }else{
            file.saveAs(file)
        }
    }
    //Función para crear la interfaz de la opción 2.
    function openFileInterface(){
        let file = new Document(dir.getPath());
        dir.getFilesInDir(); //Mostramos el contenido del directorio.

        interface.question(Messages.requestFileName, name=>{
            if(file.exists(name)){
                openFile(file, name); //Si el usuario escribe un nombre de fichero correcto, se abrirá.
            }else{
                //Se muestra un mensaje de error debido a un nombre incorrecto y a los 2 segundos se devuelve al usuario a la pantalla principal
                console.log(Messages.fileNotFound);
                setTimeout(()=>{
                    interface.removeAllListeners('line');
                    mainScreen();
                }, 2000);
            
            }
        });
    }

    //Función para abrir el fichero.
    function openFile (file, name){
        file.open(name);
        renderInterface(file);
        readCommands(file);
    }