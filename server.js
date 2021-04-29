const express = require('express');
const app = express();

app.get('/api/open', function(req, res) {
  res.json({
    message: "Open Endpoint"
  });
});

app.get('/api/protected', function(req, res) {
  res.json({
    message: 'Protected Endpoint'
  });
});

app.listen(3000);
console.log('Listening on http://localhost:3000');