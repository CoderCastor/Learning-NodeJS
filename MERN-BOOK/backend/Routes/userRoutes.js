const express = require("express");
const router = express.Router();
const { loginUser,registerUser,getCurrentUser } = require('../controllers/userController')

router.post('/',registerUser);
router.post('/login',loginUser);
router.get('/current',getCurrentUser);

module.exports = router;
