const express = require('express')
const router = express.Router()
const ItemController = require('../controllers/item.controller')

router
	.route('/')

	.get(ItemController.getAll)
	.post(ItemController.createOne)

router
	.route('/:itemID')
	.get(ItemController.getOne)
	.patch(ItemController.updateOne)
	.delete(ItemController.deleteOne)

module.exports = router
