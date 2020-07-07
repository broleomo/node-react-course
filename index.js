const express = require('express');
const app = express();

// route handler - get
app.get('/', (req, res) => {
  res.send({name: 'Brooklynn. hey, how ya doin'});
})

const PORT = process.env.PORT || 5000;

// instructs express that node wants to listen for HTTP traffic at port 5000
app.listen(PORT);

//http://localhost:5000/