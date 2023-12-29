const express = require('express');
const app = express();
const serverless = require('serverless-http')
app.get('/', (res, req) => {
    res.send("say hello !!!")
})
app.listen(7000, () => {
    console.log('ok,7000');
})
module.exports.handler = serverless(app);