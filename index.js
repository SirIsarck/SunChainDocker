const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to SunChain Demo App!');
});

app.listen(PORT, () => {
  console.log(`SunChain app running on port ${PORT}`);
});
