const express = require("express");
const router = express.Router();
const { loginUser,registerUser,getCurrentUser } = require('../controllers/userController');
const { protect } = require("../middleware/authMiddleware");

router.post('/',registerUser);
router.post('/login',loginUser);
router.get('/current',protect,getCurrentUser);

module.exports = router;
