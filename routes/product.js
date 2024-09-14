const express = require('express')
const router = express.Router()

const ProductController = require('../controllers/ProductController')

router.get('/', ProductController.index)
router.post('/show', ProductController.show)
router.post('/store', ProductController.store)

module.exports = router