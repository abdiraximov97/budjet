
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");
const mongo = require("./modules/mongo");
const routes = require("./routes/routes");

app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));

app.set("view engine", "ejs");
app.use(cookieParser());

app.use("/assets", express.static("assets"));

app.use("/uploads", express.static(path.join(__dirname, "public")));

(async function() {
    let db = await mongo();
    await app.use((req, res, next) => {
        req.db = db;
        next();
    });

    routes(server);
})();



const port = process.env.port || 8088;
app.listen(port, () => {
    console.log(`server ${port} - portda yondi!`);
})