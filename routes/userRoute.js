const express = require('express');
const { setInfo, getInfo, updateInfo ,deletInfo} = require('../controlars/setUserData');
const { deleteMany } = require('../module/info');

const router = express.Router();

router.post('/add-data',setInfo);
router.get('/get-data',getInfo);
router.post('/update-data',updateInfo)
router.post('/delete-data',deletInfo)

module.exports = router;