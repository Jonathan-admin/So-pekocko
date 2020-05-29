var fs = require('fs');

const MIME_TYPES = {
    "image/jpg": "jpg",
    "image/jpeg": "jpeg",
    "image/png": "png"
};


module.exports = (req,res,next) => {
    fs.unlink('images/'+req.body.finalFileName, function(err) {
        if (err) {
            console.log("ok");
            res.status(500).json({message: err});
        }
    });
    res.status(400).json({message: req.body.errorMessage});
}