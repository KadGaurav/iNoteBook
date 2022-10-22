const connectToMongo = require('./db');
const bodyParser = require('body-parser');
connectToMongo();

const express = require('express');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))


app.listen(port,()=>{
    console.log(`Connected to http://localhost:${port}`);
})