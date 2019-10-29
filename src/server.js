var express = require('express')
var bodyParser = require('body-parser');
const cors = require('cors')

var app = express();

app.use(bodyParser.json());
app.use(cors());

app.post('/post', (req, res) => {
    console.log(req.body)
})

app.listen(3002);