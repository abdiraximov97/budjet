
const router = require("express").Router();


router.get("/", (req, res) => {
    res.render("registration");
});

module.exports = {
    router,
    path: "/",
}