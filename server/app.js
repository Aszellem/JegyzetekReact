//API készítése
const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
const mysql = require('mysql');

//Csatlakozás az adatábishoz
const pool = mysql.pool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'jegyzetek'
})

app.route("/notes")
    .get(function(req,res){
        const q = "SELECT * FROM notes";
        pool.query(q, 
            function(error,results){
            if(!error){
                res.send(results);
            }else{
                res.send(error);
            }
        });
    })
    /*.post(function(req,res){
        const q = "INTER INTO notes (title,content) VALUES (?,?)";
        pool.query(q, [req.body.title, req.body.content],
            function(error,results){
                if(!error){
                    res.send(results);
                }else{
                    res.send(error);
                }
            })
    })

app.route("/notes/:id")
    .get(function(req,res){
        const q = "SELECT * FROM notes WHERE id = ?";
        pool.query(q, [req.params.id], 
            function(error,results){
            if(!error, results){
                res.send(results);
            }else{
                res.send(error);
            }
        });
    })
    .delete(function(req,res){
        const q = "DELETE FROM notes WHERE id = ?";
        pool.query(q, [req.params.id],
            function(error,results){
            if(!error, results){
                res.send(results);
            }else{
                res.send(error);
            }
        });
    });*/
    
    app.listen(5000, function(){
        console.log("Szerver elindult az 5000-es porton..")
    })
