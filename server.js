const express = require("express");
const app = express();
const bodyParser = require("body-parser");



const cors = require('cors');
const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));


app.use(express.json());
app.use(bodyParser.json());


app.get('/', function (req, res) {
  res.json({ message: 'Hello World!' });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

