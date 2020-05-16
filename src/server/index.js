
const express = require('express'); 
const app = express();
const path = require('path')
const PORT = 3000

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(PORT, () => {
    return console.log(`Application running on port ${PORT}`);
 });
  