//const http = require('http');
// we can get rid of above code because express listen does it for us.
const express = require('express');

const app = express();  //initializes a new object in the constant app

app.use('/',(req, res, next) => {
  console.log('This always runs!');
  next();
});

app.use('/add-product',(req, res, next) => {
  console.log('In another middleware');
  res.send('<h1>The add product page</h1>');
});

app.use('/',(req, res, next) => {
  console.log('In another middleware');
  res.send('<h1>Hello from Express!</h1>');
});

//const server = http.createServer(app);
//server.listen(3000);
// instead of above use listen
app.listen(3000);

console.log('listening on 3000');
