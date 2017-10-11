var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.status(200).send('Hello World, From Google App Engine!');
});

var PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
  console.log(`App listening on port ${PORT}`);
});
