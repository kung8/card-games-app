require('dotenv').config()
const express = require('express')
const massive = require('massive')
const AuthCtrl = require('./controller/AuthCtrl')
const GameCtrl = require('./controller/GameCtrl')

const {SERVER_PORT,CONNECTION_STRING} = process.env

const app = express()
app.use(express.json())

massive(CONNECTION_STRING).then(db=>{
    app.set('db',db)
    app.listen(SERVER_PORT,()=>console.log(`Games run on ${SERVER_PORT}`))
})

//Endpoints
app.get('/api/getcards',GameCtrl.getCards)