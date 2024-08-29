const express = require("express");

const app = express();

app.set("view engine", "ejs");

const path = require("path");
const userRoutes = require("./routes/user");
const adminRoutes = require("./routes/admin");

app.use("/libs", express.static(path.join(__dirname, "node_modules")));
app.use("/static", express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(userRoutes); 

app.listen(3000, function() {
    console.log("listening on port 3000");
});