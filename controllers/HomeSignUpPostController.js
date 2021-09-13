
module.exports = async function HomeSignUpPostController(req, res) {
    try {
        const data = await SignUpValidation.validateAsync(req.body);
        console.log(data);
        let user = await req.db.users.findOne({
            email: data.email.toLowerCase(),
        });

        if (user) throw new Error("Bu email bilan avval ro'yxatdan o'tilgan");
        user = await req.db.users.insertOne({
            ...data,
            password: await generateCrypt(data.password),
        });

        console.log(user);

        res.redirect("/");
    } catch (error) {
        res.render("registration", {
            error,
        });
    }
}