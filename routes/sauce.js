const express = require('express');
const router = express.Router();
const sauceController = require('../controllers/sauce');

const auth = require('../middlwares/authentification');
const multer = require('../middlwares/multer-config');

router.post('/', auth, multer, sauceController.createSauce);
router.get('/', auth, sauceController.getAllSauces);
router.get('/:id', auth, sauceController.getOneSauce);
router.delete('/:id', auth, sauceController.deleteSauce);


module.exports = router;

