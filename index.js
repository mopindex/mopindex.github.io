const path = require('path');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})
app.listen(8080, () => {
    console.log('Server listening on port 8080')
})