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
            email text UNIQUE, 
            password text, 
            CONSTRAINT email_unique UNIQUE (email)
            )`,
        (err) => {
            if (err) {
                // La tabla ya existe.
            }else{
                // Tabla creada correctamente, insertamos 2 usuarios.
                var insert = 'INSERT INTO persona (name, email, password) VALUES (?,?,?)'
                db.run(insert, ["Jose","jose@test.com",md5("pass123456")])
                db.run(insert, ["Francisco","francisco@test.com",md5("pass123456")])
            }
        });  
    }
});


module.exports = db