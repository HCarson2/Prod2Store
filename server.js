// --------Install NPM packages---------
// npm init -y
// npm i express nodemon dotenv
//npm i express-react-views react@16 react-dom@16

//------Server Set-up---------
const express = require('express')
const app = express()
require('dotenv').config()
//----------------Links






app.listen(3000, ()=>{
    console.log(`Currently Listening on PORT ${process.env.PORT}`)
})

