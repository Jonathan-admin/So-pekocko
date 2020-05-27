var fs = require('fs');
const Sauce = require('../models/Sauce');

module.exports = (req,res,next) => {
    Sauce.findOne({ _id: req.params.id })
    .then(sauce => {
        if(req.file) {
            const filename = sauce.imageUrl.split("/images/")[1];
            fs.unlink('images/'+filename, function(err) {
                if (err) throw err;
            })
        }
        next();
    })
    .catch(error => res.status(500).json("poi"));
} 
        
