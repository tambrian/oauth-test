const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path');
const PORT = process.env.PORT || 8080;


app.engine('html', ejs.renderFile);

app.use('/public', express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => res.render(path.join(__dirname, '../public/index.html')));

app.listen(PORT, () => console.log(`

    Listening on PORT ${PORT}!
    http://localhost:${PORT}/


`))
