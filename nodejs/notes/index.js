const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
    res.send('this is the homepage of the notes app');
}); 

app.get('/add-note', (req, res, next) => {
    res.send('this is the page for adding a note');
});
app.get('/edit-note', (req, res, next) => {
    res.send('this is the page for editing a note');
});
app.get('/view-notes', (req, res, next) => {
    res.send('this is the page for viewing notes');
});

app.listen(5000, () => {
    console.log('Server started on port 5000')
});