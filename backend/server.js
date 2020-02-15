var express = require('express')
var app = express()
var router = express.Router()

app.use(function (req, resp, next) {
    resp.header('Access-Control-Allow-Origin', "*");
    resp.header('Access-Control-Allow-Methods', 'GET,POST,PUT,HEAD,DELETE,OPTIONS');
    resp.header('Access-Control-Allow-Headers', 'content-Type,x-requested-with,beartoken,authtoken');
    resp.header('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json,Authorization');
    next();
});
var routerApp = require('./app/index.js')(router, app)
app.listen(3000, () => {
    console.log("App running at http://localhost:3000")
})
