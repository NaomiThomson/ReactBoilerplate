var express = require('express');

var app = express();

app.use(express.static('public'));

app.listen(3000, () => {
  console.log('express server up on port 3000')
});

