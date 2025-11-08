const express = require('express');
const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res, next) => {
    res.render('index');
});

app.get('/about', (req, res, next) => {
    // res.send('We are a masters class learning node.js');
    res.render('index');
});
app.get('/contact-us', (req, res, next) => {
    // res.send('Contact us on 0788587689');
    res.render('index');
});

app.listen(3000, () => {
    console.log('Server started on port 3000')
});

// app.listen(3000, startSever());

// function startSever(){
//     console.log('Server started on port 3000');
// }
