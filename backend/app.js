const express = require('express');
const app = express();
const port = process.env.PORT || 8085;
const mongoose = require('mongoose');
const cors = require('cors');
const items = require('./routes/api/items');
const users = require('./routes/api/users');
const classData = require('./routes/api/classData');


app.use('/api/items', items);
app.use(cors({origin: true, credentials: true }));
app.use(express.json({extended: false }));
app.use('/api/users', users);
app.use(cors({origin: true, credentials: true }));
app.use(express.json({etended: false }));
app.use('/api/items', items);
app.use('/api/classData',classData)
//app.use(express.json());
app.get('/', (req, res) => res.send('Hello world!'));
const username = encodeURIComponent('crb00552');
const password = encodeURIComponent('Crb2003!');
const conn_str = `mongodb+srv://${username}:${password}@cluster0.flj4dd8.mongodb.net/financebuddy?retryWrites=true&w=majority`;


mongoose.set('strictQuery', false);
mongoose.connect(conn_str).then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}`));
    console.log(`MongoDB Connection Suceeded...`);
})
.catch(err => {
    console.log(`Error in DB Connection ${err}`);
});

// TRY USING REACT ROUTER INSTEAD IF THIS DOESN'T WORK