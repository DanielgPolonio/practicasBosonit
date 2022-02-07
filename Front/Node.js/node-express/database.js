var sqlite3 = require('sqlite3').verbose()
var md5 = require('md5')

const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Error al conectar a la base de datos.
      console.error(err.message)
      throw err
    }else{
        console.log('Conectado a la base de datos.')
        db.run(`CREATE TABLE persona (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name text, 
            city text, 
            rol text
            )`,
        (err) => {
            if (err) {
                // La tabla ya existe.
            }else{
                // Tabla creada correctamente, insertamos 2 usuarios.
                var insert = 'INSERT INTO persona (name, city, rol) VALUES (?,?,?)'
                db.run(insert, ["Luis","Jaén","Estudiante"])
                db.run(insert, ["Daniel","Montilla","Profesor"])
            }
        });  
    }
});


module.exports = db