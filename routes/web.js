const express = require('express');
const router = express.Router();
const usercontroller = require('../controllers/usercontroller.js')
router.get('/form', usercontroller.getAllDoc);
router.post('/index', usercontroller.createDoc);
router.get('/edit/:id', usercontroller.editDoc);
router.post('/delete/:id', usercontroller.deletebyid);
module.exports = router;