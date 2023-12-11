const path = require('path');
const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');

const app = express();
const port = 9000;

const route = require('./routes');

// static files
app.use(express.static(path.join(__dirname, 'public')));

// body-parser
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// HTTP logger
app.use(morgan('dev'));

// Template engine
app.engine(
    'hbs',
    exphbs.create({
        extname: '.hbs',
    }).engine,
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Home, search, contact

// Route init
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
