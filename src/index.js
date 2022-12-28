const express = require("express");
const app = express();
const PORT = 3000;
const routes = require("./routes/index.routes");
const {engine} = require("express-handlebars");
const path = require("path");

app.use(routes);
app.listen(PORT, () => console.log('http://localhost:${PORT}'));
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));