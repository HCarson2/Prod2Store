// --------Install NPM packages---------
// npm init -y
// npm i express nodemon dotenv
//npm i express-react-views react@16 react-dom@16

//------Server Set-up---------
const express = require('express')
const app = express()
require('dotenv').config()

app.set('view engine', 'jsx');

app.engine('jsx', require('express-react-views').createEngine());

app.use((req, res, next) => {
    console.log('I run all routes');
    next();
});
const homeData = require('./models/homes')
//----------------Links

// Welcome page
app.get('', (req, res) => {
    res.send('Welcome To <br><br>HEY HOMES')
});



app.get('/homes', (req, res)=>{
         res.send('homes')
});





// Listen Port
app.listen(3000, ()=>{
    console.log(`Currently Listening on PORT ${process.env.PORT}`)
})

