const AuthenticationController = require('./controllers/AuthenticationController') //controlling endpoints
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

//In express, the endpoint is hit first, continuing to the middleware, then to the controller after the next() function is called within the middleware
module.exports = (app) => {
    app.post('/register', AuthenticationControllerPolicy.register, //middleware policy before controller
    AuthenticationController.register) //routes that point to controllers
    
    app.post('/login',
        AuthenticationController.login)
}