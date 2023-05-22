const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json')
const news = require('./data/news.json')

app.get('/', (req, res) =>{
    res.send('News API Running')
});

app.get('/news-categories', (req, res) => {
    res.send(categories)
});

app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const selectedNews = news.find( n => n._id === id);
    res.send(selectedNews);

    // console.log(req.params.id);
    // res.send(news)
})

app.listen(port, () => {
    console.log('Dragon news running on port ', port)
})