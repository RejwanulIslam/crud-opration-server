const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors');
app.use(cors());
app.use(express.json());

const users = [
    {
        "name": "Ayesha Rahman",
        "email": "ayesha.rahman@example.com",
        "password": "Ayesha@123",
        id : 1
    },
    {
        "name": "Rifat Hossain",
        "email": "rifat.hossain@example.com",
        "password": "Rifat#456",
        id : 2
    },
    {
        "name": "Tania Akter",
        "email": "tania.akter@example.com",
        "password": "Tania$789",
        id : 3
    },
    {
        "name": "Fahim Ahmed",
        "email": "fahim.ahmed@example.com",
        "password": "Fahim!234",
        id : 4
    },
    {
        "name": "Nusrat Jahan",
        "email": "nusrat.jahan@example.com",
        "password": "Nusrat@567",
        id : 5
    }
]



app.get('/', (req, res) => {
    res.send('user managment server is running');
})

app.get('/users', (req, res) => {
    res.send(users)
})


app.post('/users', (req, res) => {
    console.log('post api hitting');
    console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser);
})

app.listen(port, () => {
    console.log(`server is running on${port}`)
})