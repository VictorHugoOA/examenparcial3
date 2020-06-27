const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const estadoRuta = require('./routes/rutas');

const app = express();


app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.get('/state/:estado', estadoRuta);

app.listen(process.env.PORT || 3000);
