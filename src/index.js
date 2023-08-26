const path = require("path");
const express = require("express");
// require("express") là nạp cái express từ node_mudules và lưu vào biến express
const { engine } = require("express-handlebars");
const morgan = require("morgan");
const { log } = require("console");
const methodOverride = require("method-override");
const route = require("./routes");

const db = require("./config/db");

//Connect to DB
db.connect();

const app = express();
// Cái gì mà express được trả về thì nó được xây dựng sẵn ở express rồi nên khi ta gọi express() thì trả lại cho ta 1 đối tượng để ta có thể xây dựng website
//Http logger
// app.use(morgan("combined"));
// Template engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
);
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(methodOverride("_method"));
app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resource", "views"));

const post = 1405;
// biến post giúp ta muốn chạy website ở cổng nào
//Route init
route(app);

// Get : như ta dùng route

app.listen(post, () => {
  console.log(`listening on port ${post}`);
});
