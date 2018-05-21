const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const expHbs = require("express-handlebars");

const app = express();


app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
    extended:false
}));

app.use(methodOverride('_method'));

app.engine('handlebars', expHbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

let routes = require('./controllers/routes.js');
app.use('/', routes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, function() {
    console.log('Server listening on http://localhost: ' + PORT);
});