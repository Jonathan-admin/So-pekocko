
const controleRegex = [/^[\wéèàêûçàôë]{2}[\w\s-'éèàêûçàôë]{0,48}$/i,
                    /^[\wéèàêûçàôë]{2}[\w\s-'éèàêûçàôë]{0,40}$/i,
                    /^[\wéèàêûçàôë]{2}[\w\s-éèàêûçàôë,?;.!:/'()]{0,253}$/i,
                    /^[a-zA-Zéèàêûçàôë]{2}[a-zA-Z\s-éèàêûçàôë]{0,48}$/i,
                    /^([1-9]|10)$/];

module.exports = (req,res,next) => {
    let compteur = 0;
    if(req.body.sauce) {
        sauceObjet = JSON.parse(req.body.sauce);
    } else {
        sauceObjet = { ...req.body };
    }
    console.log(req.body.sauce);
    for (const key in sauceObjet) {
        if (sauceObjet.hasOwnProperty(key)&&compteur<5) {
            if(!controleRegex[compteur].test(sauceObjet[key])) {
                req.body.errorMessage = "Le champ "+key+ " ne semble pas valide !";  
                next();
            }  
        }
        compteur++;      
    }
    next();
    
    
}