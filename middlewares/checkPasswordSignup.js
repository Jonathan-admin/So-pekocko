module.exports = (req,res,next) => {
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/;
    if(regexPassword.test(req.body.password)) {
        next();
    } else {
        res.status(400).json({ message: "Le mot de passe doit comporter au moins 10 caractères, "
        +"posséder au moins un chiffre, une lettre majuscule et minuscule et l'un des caractères spéciaux suivants: @$!%*?&."});
    }
}