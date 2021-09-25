const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');  //called on terminal using npm install --save body-parser

const app = express();  //initializes a new object in the constant app

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));//added last


app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);

console.log('listening on 3000');
