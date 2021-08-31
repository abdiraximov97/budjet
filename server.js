
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");
const userRoute = require("./routes/userRoute");
const regRoute = require("./routes/regRoute");

app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));

app.set("view engine", "ejs");
app.use(cookieParser());

app.use("/assets", express.static("assets"));

app.use("/uploads", express.static(path.join(__dirname, "public")));

app.use(userRoute.path, userRoute.router);
app.use(regRoute.path, regRoute.router);

const port = process.env.port || 8088;
app.listen(port, () => {
    console.log(`server ${port} - portda yondi!`);
})