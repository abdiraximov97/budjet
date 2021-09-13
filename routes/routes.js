
const userRoute = require('./userRoute');
// const regRoute = require('./regRoute');

module.exports = (server) => {
    server.use(userRoute.path, userRoute.router);
    // app.use(regRoute.path, regRoute.router);


    server.use((req, res) => {
        res.render("error");
    });
}