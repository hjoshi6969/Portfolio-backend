const express = require('express');
const cors = require('cors')
const mysql = require('mysql')

const app = express()
app.use(cors())

const db = mysql.createConnection({
    host:"localhost",
    user:"serveruser",
    password:"gorgonzola7!",
    database:"portfolio"
})

app.get('/', (re, res) => {
    return res.json("from backend");
});

app.get('/projects', (req, res) => {
    const sql = "SELECT * FROM projects";
    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.get('/skills', (re, res) => {
    const sql = "SELECT * FROM skills";
    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.get('/catogeries', (re, res) => {
    const sql = "SELECT * FROM catogeries";
    db.query(sql, (err,data) => {
        if(err) return res.json(err);
        return res.json(data)
    })
})

app.listen(8000, () => {
    console.log("lestining");
});
