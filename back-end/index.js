const express = require('express') 
const mysql = require('mysql') 

const app = express() 
app.use(express.json())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });

const conectBD = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'portafolio'
})

app.get('/', (req,res) => {
    res.sendStatus(200)
})

app.post('/portafolio', (req,res) => { 
    const {user, password} = req.body
    const values = [user, password]
    const sql = 'select * from login where user = ? and password = ?'
    console.log('values',values)

    conectBD.query(sql, values,(err,result) => {
        if(err) {
            res.status(500).send(err)
        } else {
            if (result.length > 0) {
                res.status(200).send({
                    "idlogin": result[0].idlogin,
                    "user": result[0].user
                     //"password": result[0].password
                })
            } else {
                res.status(400).send('Usuario no existe')
            }
        }
    })
})



app.listen(3001, console.log('Server runnig on port 3001')) //paso1