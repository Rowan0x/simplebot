// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();
const fs = require("fs");


app.use(express.static("public"));

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/Webfiles/index.html");
});

app.get("/WI2h2rOIW2hraowgh", (request, response) => {
  response.sendFile(__dirname + "/Design/style.css");
});

//
//app.get("/*", (request, response) => {
  //response.send("<h1>Error 404:</h1><p>Can't find this page</p>");
//});
//

app.get("/home", (request, response) => {
  response.sendFile(__dirname + "/Webfiles/index.html");
});

app.get("/proto", (request, response) => {
  const fileName = request.query.get;
  console.log(fileName)
  const path = "./Storage/" + fileName + ".html";
  if (fs.existsSync(path)) {
   response.sendFile(__dirname + "/Storage/" + fileName + ".html");
  } else {
    response.send("Invaild proto.")
  }
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
