const jsonWebToken = require('jsonwebtoken');

module.exports = (req,res,next) => {
    try { 
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jsonWebToken.verify(token,'RANDOM_TOKEN_SECRET');
        const userId = decodedToken.userId;
        if(req.body.userId&&req.body.userId!==userId) {
            throw "Non authentifié!";
        } else {
            next();
        }
    } catch {
        res.status(401).json(req.headers.authentification.split(" ")[1]);
    }
}