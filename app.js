const express = require('express');
const app = express();
const port = 3009;

app.get('/', (req, res) => {
  res.send('Hello Jenkins ci cd  version 1.1 !');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
