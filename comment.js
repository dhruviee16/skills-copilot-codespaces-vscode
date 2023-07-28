// Create web server

const express = require('express');
const app = express();
const path = require('path');

// Set port
const port = 3000;

// Set view engine to ejs
app.set('view engine', 'ejs');

// Set views folder
app.set('views', path.join(__dirname, 'views'));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Set router
app.get('/', (req, res) => {
    res.render('index', {title: 'Home'});
});

app.get('/about', (req, res) => {
    res.render('about', {title: 'About'});
});

app.get('/contact', (req, res) => {
    res.render('contact', {title: 'Contact'});
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
