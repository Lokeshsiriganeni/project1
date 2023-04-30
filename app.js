const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("hello");
});
app.listen(3000);

/*const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("Hello World!");
});
app.listen(3000);*/
# project1
