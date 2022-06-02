// --------Install NPM packages---------
// npm init -y
// npm i express nodemon dotenv
//npm i express-react-views react@16 react-dom@16 --save

//------Server Set-up---------
const mongoose = require('mongoose')
const express = require('express')
const app = express()
const Parcel = require('./models/homes');
// const realEstate = require('../models/realEstateModel')
// const mongoose = require('mongoose');

// const perScholas = mongoose
// .connect(process.env.DATABASE.replace("<password>",process.env.PASSWORD), {
//         useCreateIndex: true,
//         useNewUrlParser: true,
//         useFindAndModify: false,
//         useUnifiedTopology: true,
//       })
// .then(()=>{
//     console.log("DATABASE IS UP AND RUNNING")

// });


//... and then farther down the file

// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.connection.once('open', ()=> {
//     console.log('connected to mongo');
// });
//---Links env
require('dotenv').config()

app.set('view engine', 'jsx');

app.engine('jsx', require('express-react-views').createEngine());

// ---Middleware---
//near the top, around other app.use() calls
app.use(express.urlencoded({extended:false}));

app.use((req, res, next) => {
    console.log('I run all routes');
    next();
});
const houseData = require('./models/homes');


// Welcome page
app.get('', (req, res) => {
    res.render('Welcome')
});//--Index route--
app.get('/homes', (req, res)=>{
    res.render('Index', {Parcel: houseData})
})

 // --New Product/route--(Shows a Form page)
app.get('/homes/new', (req, res)=>{
    res.render('New');
});
//--Show Route--(Show individual Product)
app.get('/homes/:id', (req, res)=>{
    res.render('Show', {Parcel: houseData[req.params.id]});
});
//--Delete Route--
// app.delete('/homes:id/delete', (req, res)=>{
//     console.log(req.params.id)
//     let Parcel = await Parcel.findById(req, params.id)
//     Parcel = req.body
// })

//--Product Post Route--(Submit create Form)
app.post('/homes', (req, res)=>{
    Parcel.push(req.body);
    console.log(houseData);
    res.redirect('homes'); //send the user back to /homes
});



// Listen Port
app.listen(3000, ()=>{
    console.log(`Currently Listening on PORT ${process.env.PORT}`)
})

