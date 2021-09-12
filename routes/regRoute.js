
const router = require("express").Router();


router.get("/", (req, res) => {
    res.render("registration");
});

router.post("/", async (req, res) => {
    const {email, password} = req.body;

    let user = await req.db.users.findOne(
        {
            email: email.toLowerCase(),
        }
    );

    if (user) {
        res.render("index", {
            error: "Bu emaildan allaqachon ro'yxatdan o'tilgan!",
        });
        return;
    }

    user = await req.db.users.insertOne({
        name,
        firstName,
        username,
        email,
        password: await createCrypt(password),
    });

});

module.exports = {
    router,
    path: "/registration",
}