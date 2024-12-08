const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyparse = require('body-parser');


const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

//Mysql connection setup
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '@Kunal2005'
});

//connect to database
db.connect((err)=>{
    if(err) throw err;
    console.log("Connected to Database");
});

//Post
app.post('/login', (req, res) => {
    const { email, pass } = req.body;
  
    // Query to check the user credentials
    const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
    db.query(query, [email, pass], (err, results) => {
      if (err) {
        return res.status(500).send('Database error');
      }
      if (results.length > 0) {
        res.json({ message: 'Login successful', user: results[0] });
      } else {
        res.status(400).json({ message: 'Invalid email or password' });
      }
    });
  });
  

app.listen(port,()=>{
    console.log("Server started Successfully");
})