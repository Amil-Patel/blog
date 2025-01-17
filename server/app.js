const express = require("express");
const dotenv = require("dotenv");
const app = express();
// blog post routes
const router = require("./Controllers/Blog/BlogPost");
const conn = require("./db/conn");
const bodyParser = require("body-parser");
const cors = require("cors");
// blog category routes
const blogCategory_route = require("./Routes/Blog/BlogCategory");
const dashboard_routes = require("./Routes/Dashboard/Dashboard");
const namescategory_routes = require("./Routes/Names/Namescategory");
const names_routes = require("./Routes/Names/Names");
const bookscategory_routes = require("./Routes/Books/BookCategory");
const books_routes = require("./Routes/Books/Books");
// const blogPost_route = require('./Routes/Blog/BlogPost');
const user_route = require("./Routes/user/User");

// Middlewares
dotenv.config();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));

// blog post routes
app.use(router);
app.get("/", (req, res) => {
  res.send("Hello Server")
})
// blog category routes
app.use("/", blogCategory_route);

// dashboard routes
app.use("/", dashboard_routes);

// Names categoty routes
app.use("/", namescategory_routes);

// Names routes
app.use("/", names_routes);

// Book categoty routes
app.use("/", bookscategory_routes);

// Book routes
app.use("/", books_routes);

// app.use('/', blogPost_route);
app.use("/", user_route);

app.listen(process.env.PORT, () => {
  console.log("SERVER CREATED " + process.env.PORT);
});
