const express = require('express');
const router = express.Router();
const sauceController = require('../controllers/sauce');

const auth = require('../middlewares/authentification');
const multer = require('../middlewares/multer-config');
const likingAlgo = require('../middlewares/likingSystem');
const valid = require('../middlewares/createSauceDataValidation');
const deleteOldPicture = require('../middlewares/deletePictureFolder');

router.post('/', auth, multer, sauceController.createSauce);
router.get('/', auth, sauceController.getAllSauces);
router.get('/:id', auth, sauceController.getOneSauce);
router.post('/:id/like', auth, likingAlgo, sauceController.likeOneSauce);
router.put('/:id', auth, multer, deleteOldPicture, sauceController.modifyOneSauce);
router.delete('/:id', auth, sauceController.deleteSauce);


module.exports = router;

