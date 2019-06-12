const express = require('express');

const handle = require('./handlers')

const app = express();

const port = 4000;

app.get('/',(req,res)=>res.json({hello:'world'}));

//handling errors 
app.use(handle.notFound);
app.use(handle.errors);

//port Listening
app.listen(port,console.log('Server Started on '+port));



