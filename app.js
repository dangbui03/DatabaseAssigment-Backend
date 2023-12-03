const express = require("express");
const app = express();
const port = 8080

mysqldb = require('./src/configs/db').connection;
app.use('/', require('./src/routes/route'));

// Root route handler
app.get("/", (req, res) => {
    res.send("Hello World! It's a test server");
  }); 

app.listen(port, () => {
    console.log(`Server is running at http://127.0.0.1:${port}`);
})