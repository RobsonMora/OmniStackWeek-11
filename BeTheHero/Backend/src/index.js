const express = require('express');
const routes = require('./routes');
const cors = require('cors')

const app = express();

app.use(cors())
app.use(express.json());

app.use(routes);

app.listen(3333);

//stopped in 35:00 24/03