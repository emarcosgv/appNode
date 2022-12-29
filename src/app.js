const express = require("express");
const app = express();
const routes = require("./routes/index.routes");
const {engine} = require("express-handlebars");
const path = require("path");
const morgan = require("morgan");

app.use(routes);
app.engine('hbs', engine({
    layoutsDir: __dirname + '/views/', extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));
app.use(express.json());

module.exports = app;