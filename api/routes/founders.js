var express = require('express');
var router = express.Router();
var db = require('../connect.js');
var fun = require('../functions.js');

router.get('/:id', function(req,res,next) {
    const id = req.params.id;

    db.pool.getConnection(function(err, con) {
      if (err) {
          res.send("error connecting to mysql server");
          throw err;
      } else {
          fun.logMessage("Connection successful");
          const query = "SELECT * FROM founders WHERE company_id = " + con.escape(id);
          con.query(query, function (err,result) {
              con.destroy();
              res.send(result);
          })
      }
  });
});

router.put('/',function(req,res) {
    const data = req.body.put;
    db.pool.getConnection(function(err, con) {
        if (err) {
            res.send("error connecting to mysql server");
            throw err;
        } else {
            fun.logMessage("Connection successful");
            const query = "INSERT INTO founders (company_id, name, title) VALUES (" 
                + con.escape(data.company_id) + " , " 
                + con.escape(data.name) + ", " 
                + con.escape(data.title) + ")";
            console.log(query);
            con.query(query, function(err, result) {
                con.destroy();
                res.send(result);
            })
        }
    })
})


module.exports = router;