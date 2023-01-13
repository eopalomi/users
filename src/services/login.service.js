const connectDB = require('../db/connect_db')

let validateUser = async (usuario, password) => {
    let userCredentials = {
        user: usuario,
        password: password
    }

    let { rows } = await connectDB.execQuery(`select * from usuari.auth_usuari('${JSON.stringify(userCredentials)}')`, null)

    let queryResult = rows[0];

    if (!queryResult.valid) {
        return { isValid: false, names: queryResult.no_usulog }
    }

    return { isValid: true, names: queryResult.no_usulog }
};

module.exports = {
    validateUser
};