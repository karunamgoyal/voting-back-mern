//require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./models');
const handle = require('./handlers');
// server express app init
const app = express();

const port = 4000;//process.env.PORT || 4000;

app.get('/',(req,res)=>res.json({hello:'world'}));

//MiddleWare

app.use(cors());
app.use(bodyParser.json());

//handling errors 
app.use(handle.notFound);
app.use(handle.errors);

//port Listening
app.listen(port,console.log('Server Started on '+port));



