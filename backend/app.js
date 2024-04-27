const express = require('express');
const app = express();
const port = process.env.port || 8085;
const mongoose = require('mongoose');
const cors = require('cors');
const items = require('./routes/api/items');
const users = require('./routes/api/users');

app.use('/api/items', items);
app.use('/api/users', users);
app.use(cors({origin: true, credentials: true }));
app.use(express.json({etended: false }));
app.get('/', (req, res) => res.send('Hello world!'));

const conn_str = 'mongodb+srv://crb00552:Crb2003!@cluster0.ukjtzht.mongodb.net/';
mongoose.set('strictQuery', false);
mongoose.connect(conn_str).then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}`));
    console.log(`MongoDB Connection Suceeded...`);
})
.catch(err => {
    console.log(`Error in DB Connection ${err}`);
});

// TRY USING REACT ROUTER INSTEAD IF THIS DOESN'T WORK