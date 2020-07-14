const express = require('express');
require('./services/passport');

const app = express();

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;

// instructs express that node wants to listen for HTTP traffic at port 5000
app.listen(PORT);