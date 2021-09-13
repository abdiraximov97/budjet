
const router = require("express").Router();
const { generateCrypt } = require("../modules/bcrypt");
const { SignUpValidation } = require("../modules/validations");
const HomeSignUpPostController = require("../controllers/HomeSignUpPostController");


router.get("/", (req, res) => {
    res.render("index");
});

router.get("/registration", (req, res) => {
    res.render("registration");
});

router.post("/registration", HomeSignUpPostController);

module.exports = {
    router,
    path: "/",
}