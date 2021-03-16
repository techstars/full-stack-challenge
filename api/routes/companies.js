var express = require('express');
var router = express.Router();
var db = require('../connect.js');
var fun = require('../functions.js');

router.get('/', function(req,res) {
    //res.send("clients loaded");
    db.pool.getConnection(function(err, con) {
      if (err) {
          res.send("error connecting to mysql server");
          console.log(err);
          throw err;
      } else {
          fun.logMessage("Connection successful");
          const query = 'SELECT * FROM companies';
          con.query(query, function (err,result) {
              con.destroy();
              res.send(result);
          })
      }
  });
});

router.put('/', function(req,res) {
    const data = req.body.put;
    db.pool.getConnection(function(err, con) {
        if (err) {
            res.send("error connecting to mysql server");
            console.log(err);
            throw err;
        } else {
            fun.logMessage("Connection succesful");

            const query = "INSERT INTO companies (name, city, state, date_founded, description) VALUES (" 
                + con.escape(data.name) + ", " 
                + con.escape(data.city) + ", " 
                + con.escape(data.state) + ", " 
                + con.escape(data.date_founded) + ", " 
                + con.escape(data.description) 
            + ")";
            con.query(query, function (err, result) {
                con.destroy();
                res.send(result);
            })
        }
    })
})

router.post('/:id', function(req,res) {
    const data = req.body.post;
    console.log(data);
    const id = req.params.id;
    db.pool.getConnection(function(err, con) {
        if (err) {
            res.send("error connecting to mysql server");
            console.log(err);
            throw err;
        } else {
            const query = "UPDATE companies SET `name` = "
                + con.escape(data.name)  + ", `city` = "
                + con.escape(data.city)  + ", `state` = "
                + con.escape(data.state) + ", `date_founded` = "
                + con.escape(data.date_founded)  + ", `description` = "
                + con.escape(data.description) + " WHERE id = " + con.escape(id);
            console.log(query);
            con.query(query, function(err, result) {
                con.destroy();
                res.send(result);
            })

        }
    })
})

router.delete('/:id', function(req,res) {
    const id = req.params.id;
    db.pool.getConnection(function(err,con) {
        if (err) {
            res.send("error connecting to mysql server");
        } else {
            const query = "DELETE FROM companies WHERE id = " + con.escape(id);
            console.log(query);
            con.query(query, function(err,result) {
                con.destroy();
            })
        }
    })
});


//get data for single client
router.get('/:id', function(req,res,next) {
    const id = req.params.id;
    db.pool.getConnection(function(err,con) {
        if (err) {
            res.send("error connecting to mysql server");
        } else {
            fun.logMessage("Getting query ID");
            const query = "SELECT * FROM companies WHERE id = " + con.escape(id);
            con.query(query, function(err,result) {
                con.destroy();
                if (result.length === 0) {
                    res.send({error: "No clients found"});
                } else {
                    res.send(result[0]);
                }
            })
        }
    })
})

module.exports = router;