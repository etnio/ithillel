const express = require('express');
const cors = require('cors');
const app = express();

const port = 3000;

const users = [
    {
        id: 2,
        name:'Vasya'
    }
]

app.use('/public', express.static('public')).use(cors());
app.get('/', (req, res) => res.send('Hello World Server'))
app.get('/users', (req, res) => res.send(users))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))