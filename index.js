
const express = require('express'); 
const app = express();
const path = require('path')
const PORT = 3000

app.use(express.static("public"));

app.listen(PORT, () => {
    return console.log(`Application running on port ${PORT}`);
 });
  