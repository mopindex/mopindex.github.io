const path = require('path');
const express = require('express');
const app = express();

const schedule = require('node-schedule');
const rule = new schedule.RecurrenceRule();
rule.hour = 0;

let probability = Math.floor(Math.random() * 99);
schedule.scheduleJob(rule, () => {
    probability = Math.floor(Math.random() * 99);
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})
app.get('/probability', (req, res) => {
    res.json(probability);
})
app.listen(8080, () => {
    console.log('Server listening on port 8080')
})
