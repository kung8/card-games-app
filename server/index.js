require('dotenv').config()
const express = require('express')
const massive = require('massive')
const AuthCtrl = require('./controller/AuthCtrl')
const GameCtrl = require('./controller/GameCtrl')
const session = require('express-session')

const {SERVER_PORT,CONNECTION_STRING,SESSION_SECRET} = process.env

const app = express()
app.use(express.json())

massive(CONNECTION_STRING).then(db=>{
    app.set('db',db)
    app.listen(SERVER_PORT,()=>console.log(`Games run on ${SERVER_PORT}`))
})

app.use(session({
    secret:SESSION_SECRET,
    resave:false,
    saveUninitialized:true,
    cookie:{
        maxage:10000
    }
}))

//Endpoints
app.get('/api/getcards',GameCtrl.getCards)
app.post('/api/login',AuthCtrl.login)
app.post('/api/register',AuthCtrl.register)
app.post('/api/logout',AuthCtrl.logout)
app.get('/api/currentUser',AuthCtrl.currentUser)