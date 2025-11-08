const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to my Node.js home page!');
});

app.get('/about', (req, res) => {
  res.send('We are a masters class learning node.js');
});

app.get('/contact-us', (req, res) => {
  res.send('Contact us on 0788587689');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
