var express = require('express');
var router = express.Router();


// 將註冊的ID新增至資料庫裡
router.get('/', function(req, res) {
    res.redirect('/Client_Register.html');
});

module.exports = router;