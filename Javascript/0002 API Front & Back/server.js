const express = require('express')
const cors = require('cors')
const axios = require('axios')
const app = express()

app.listen("4567")

app.use(cors())

app.get("/", async (req, res) => {

    // Response é a resposta do axios mas eu tiro o data de dentro do response
    const { data } = await axios("https://jsonplaceholder.typicode.com/users")
    
    return res.json(data)
    
    return res.json([
        {name: "Jeff"},
        {name: "Diego"}
    ])
})