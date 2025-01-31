const express = require('express')
const app = express()

const { PORT } = require('./config/config')
const connect = require('./database/connection')

const categoriesRoute = require('./routes/categoriesRoute')

app.get('/', (request, response) => {
    response.status(200).send("It's working")
})

app.use('/api/v1/categories', categoriesRoute)

connect()
    .then( () => {
        try{
            app.listen(PORT, console.log(`Server is running at: http://localhost:${PORT}`))
        }
        catch(error) {
            console.log(`Can't connect to database: ${error}`)
        }
    })
    .catch(error => {
        console.log(`Error while connecting to database; ${error}`)
    })