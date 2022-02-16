const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());

const port = 3002

app.get('/login', (_req, res) => {
    res.send({
        token: 'test123'
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})