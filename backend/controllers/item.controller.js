const { SuccessResponse, ErrorResponse } = require('../lib/helpers')
const Item = require('../models/Item')

class ItemController {
	static getOne = async (req, res) => {
		try {
			const item = await Item.findById(req.params.itemID)
				.populate({ path: 'category' })
				.exec()
				.populate({ path: 'category' })
				.exec()
			return SuccessResponse(res, item, undefined)
		} catch (err) {
			return ErrorResponse(res, undefined, err, 500)
		}
	}

	static getAll = async (req, res) => {
		try {
			const items = await Item.find({}).populate({ path: 'category' }).exec()
			return SuccessResponse(res, items, undefined)
		} catch (err) {
			return ErrorResponse(res, undefined, err, 500)
		}
	}

	static createOne = async (req, res) => {
		try {
			const newItem = await Item.create(req.body)
			return SuccessResponse(res, newItem, undefined, 201)
		} catch (err) {
			return ErrorResponse(res, undefined, err, 500)
		}
	}

	static updateOne = async (req, res) => {
		try {
			const updatedItem = await Item.findByIdAndUpdate(req.params.itemID, req.body)
			return SuccessResponse(res, updatedItem, undefined)
		} catch (err) {
			return ErrorResponse(res, undefined, err, 500)
		}
	}

	static deleteOne = async (req, res) => {
		try {
			await Item.findOneAndDelete(req.params.itemID)
			return SuccessResponse(res, undefined, undefined, 201)
		} catch (err) {
			return ErrorResponse(res, undefined, err, 500)
		}
	}
}

module.exports = ItemController
