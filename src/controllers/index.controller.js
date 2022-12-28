import express from 'express';
import { engine } from 'express-handlebars';
import * as path from "path";

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname,'views'));

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(3000);


const controller = {};


controller.index = (req, res) => {
    res.send("Hola Express")
};

module.exports = controller;