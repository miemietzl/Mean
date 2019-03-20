const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
  //res.send('<h1>Hello World</h1>')
  app.use(express.static('public'))
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log('Server started on port ' + PORT));
