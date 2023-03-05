// require related moduels used in the project
const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const port = 3000;
const generatePassword = require("./generate_password");

//body-parser 已經是 Express 內建的一部分了，因此我們其實可以直接呼叫 express

// setting template engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// setting body-parser
app.use(express.urlencoded({ extended: true })); //改寫成 express，也可以直接取得 urlencoded 方法

// setting routes
app.get("/", (req, res) => {
  res.render("index");
});

app.post("/", (req, res) => {
  //   console.log("random password is: ", generatePassword(req.body));
  const options = req.body;
  const password = generatePassword(req.body);

  //   res.render("index", { password: password, options: options });物件名稱和屬性的名稱相同時，可省略
  res.render("index", { password, options });
});

// starts the express server and listening for connections.
app.listen(port, () => {
  console.log(`Express app listening on port ${port}.`);
});

