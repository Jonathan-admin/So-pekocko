const multer = require('multer');
 
const MIME_TYPES = {
    "image/jpg": "jpg",
    "image/jpeg": "jpeg",
    "image/png": "png"
};

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, 'images');
    },
    filename: (req, file, callback) => {
      const name = file.originalname.split(".")[0];
      const extension = MIME_TYPES[file.mimetype];
      const finalFilename = name +"_"+Date.now()+"."+extension;
      req.body.finalFileName = finalFilename;
      callback(null, finalFilename);
    }
});

module.exports = multer({storage: storage}).single('image');