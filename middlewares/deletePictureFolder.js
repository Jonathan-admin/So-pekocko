var fs = require('fs');
const Sauce = require('../models/Sauce');

module.exports = (req,res,next) => {
    Sauce.findOne({ _id: req.params.id })
    .then(sauce => {
        if(req.file) {
            const filename = sauce.imageUrl.split("/images/")[1];
            fs.unlink('images/'+filename, function(error) {
                if (error) throw error;
            })
        }
        next();
    })
    .catch(error => res.status(500).json({message: error}));
} 
        
