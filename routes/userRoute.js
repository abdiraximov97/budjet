
const router = require("express").Router();
const { createCrypt } = require("../modules/bcrypt");

router.get("/", (req, res) => {
    res.render("index");
});

router.post("/", async (req, res) => {
    const {email, password} = req.body;
    console.log(req.body);
    if(!(email && password)) {
        res.render("index", {
            error: "Email yoki parol xato!",
        });
        return;
    }

});

module.exports = {
    router,
    path: "/",
}