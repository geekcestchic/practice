const app = require('express')();
app.get('/', (req, res) => {
    res.send('Welcome to the future');
});
app.listen();