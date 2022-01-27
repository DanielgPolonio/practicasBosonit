const express = require('express');

function createRouter(db) {
  const router = express.Router();
  const owner = '';

  router.post('/persona', (req, res, next) => {
    db.query(
      'insert into personas (name, city, rol) VALUES(?,?,?)',
      [req.body.name, req.body.city, req.body.rol],
      (error) => {
        if (error) {
          console.error(error);
          res.status(500).json({
            status: 'error'
          });
        } else {
          res.status(200).json({
            status: 'ok'
          });
        }
      }
    );
  });

  router.get('/persona/:id', function (req, res, next) {
    db.query(
      'SELECT id, name, city, rol FROM personas WHERE id=? ORDER BY id',
      [req.params.id],
      (error, results) => {
        if (error) {
          console.log(error);
          res.status(500).json({
            status: 'error'
          });
        } else {
          res.status(200).json(results);
        }
      }
    );
  });

  router.put('/personaEdit/:id', function (req, res, next) {
    db.query(
      'UPDATE personas SET name=?, city=?, rol=? WHERE id=?',
      [req.body.name, req.body.city, req.body.rol, req.params.id],
      (error) => {
        if (error) {
          res.status(500).json({
            status: 'error'
          });
        } else {
          res.status(200).json({
            status: 'ok'
          });
        }
      }
    );
  });

  router.delete('/persona/:id', function (req, res, next) {
    db.query(
      'DELETE FROM personas WHERE id=?',
      [req.params.id],
      (error) => {
        if (error) {
          res.status(500).json({
            status: 'error'
          });
        } else {
          res.status(200).json({
            status: 'ok'
          });
        }
      }
    );
  });

  return router;
}

module.exports = createRouter;
