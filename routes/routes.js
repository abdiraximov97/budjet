
const userRoute = require('./userRoute');
const regRoute = require('./regRoute');

module.exports = (server) => {
    app.use(userRoute.path, userRoute.router);
    app.use(regRoute.path, regRoute.router);
}