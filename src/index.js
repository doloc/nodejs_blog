const path = require('path');
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const exphbs = require('express-handlebars');
require('dotenv').config()

const route = require('./routes');
const db = require('./config/db');

const app = express();
const port = process.env.PORT || 9000

// connect to DB
db.connect();

// static files
app.use(express.static(path.join(__dirname, 'public')));

// body-parser
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

app.use(methodOverride('_method'));

// HTTP logger
app.use(morgan('dev'));

// Template engine
app.engine(
    'hbs',
    exphbs.create({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }).engine,
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Home, search, contact

// Route init
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
