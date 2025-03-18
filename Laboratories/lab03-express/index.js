const express = require('express');
const bodyParser = require('body-parser');
const filmRoutes = require('./routes/films');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use('/api/films', filmRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
