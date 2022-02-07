// Create express app
var express = require("express")
var cors = require('cors');
var app = express()
var db = require("./database.js")

var bodyParser = require("body-parser");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Puerto.
var HTTP_PORT = 8000 
// Iniciar server.
app.listen(HTTP_PORT, () => {
    console.log("Servidor activo en puerto %PORT%".replace("%PORT%",HTTP_PORT))
});
// Directorio raiz.
app.get("/", (req, res, next) => {
    res.json({"message":"Ok"})
});

// MÉTODOS CRUD.

//GET ALL (Obtener todas las personas).
app.get("/api/personas", (req, res, next) => {
    var sql = "select * from persona"
    var params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":rows
        })
      });
});

//GET ONE PERSONA (Obtener persona específica).
app.get("/api/persona/:id", (req, res, next) => {
    var sql = "select * from persona where id = ?"
    var params = [req.params.id]
    db.get(sql, params, (err, row) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":row
        })
      });
});

//CREATE PERSONA (Crear persona).
app.post("/api/persona/", (req, res, next) => {
    var errors=[]
    if (errors.length){
        res.status(400).json({"error":errors.join(",")});
        return;
    }
    var data = {
        name: req.body.name,
        city: req.body.city,
        rol : req.body.rol
    }
    var sql ='INSERT INTO persona (name, city, rol) VALUES (?,?,?)'
    var params =[data.name, data.city, data.rol]
    db.run(sql, params, function (err, result) {
        if (err){
            res.status(400).json({"error": err.message})
            return;
        }
        res.json({
            "message": "success",
            "data": data,
            "id" : this.lastID
        })
    });
})

//UPDATE PERSONA (Actualizar persona).
app.patch("/api/persona/:id", (req, res, next) => {
    var data = {
        name: req.body.name,
        city: req.body.city,
        rol : req.body.rol
    }
    db.run(
        `UPDATE persona set 
           name = COALESCE(?,name), 
           city = COALESCE(?,city), 
           rol = COALESCE(?,rol) 
           WHERE id = ?`,
        [data.name, data.city, data.rol, req.params.id],
        function (err, result) {
            if (err){
                res.status(400).json({"error": res.message})
                return;
            }
            res.json({
                message: "success",
                data: data,
                changes: this.changes
            })
    });
})

//DELETE PERSONA (Borrar persona).
app.delete("/api/persona/:id", (req, res, next) => {
    db.run(
        'DELETE FROM persona WHERE id = ?',
        req.params.id,
        function (err, result) {
            if (err){
                res.status(400).json({"error": res.message})
                return;
            }
            res.json({"message":"deleted", changes: this.changes})
    });
})

// Respuesta default
app.use(function(req, res){
    res.status(404);
});
