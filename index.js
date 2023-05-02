const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

const food = require('./data/food.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Dragon is running');
});

app.get('/food', (req, res) => {
    res.send(food);
})

app.listen(port, () => {
    console.log(`Dragon API is running on port: ${port}`);
})