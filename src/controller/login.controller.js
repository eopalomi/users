const login_service = require('../services/login.service')

let authenticateUser = async (req, res) => {
    let { user, password } = req.body;

    let authResult = await login_service.validateUser(user, password);

    if (!authResult.isValid) {
        res.json({
            valid: false,
            user: user,
            msg: "usuario o contraseña inválida"
        });
    };

    if (authResult.isValid) {
        res.json({
            valid: true,
            user: user,
            userName: authResult.names,
            msg: "usuario autenticado correctamente",
            token: ''
        });
    };
};

module.exports = {
    authenticateUser
}