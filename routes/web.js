const express = require('express');
const router = express.Router();
const usercontroller = require('../controllers/usercontroller.js')
router.get('/form', usercontroller.create);
router.post('/index', usercontroller.createDoc);
router.get('/index', usercontroller.getAllDoc);

router.get('/edit/:id', usercontroller.editDoc);
router.post('/update/:id', usercontroller.updateDoc);
router.post('/delete/:id', usercontroller.deletebyid);
module.exports = router