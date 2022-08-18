const Category = require('../models/Category')
const { SuccessResponse, ErrorResponse } = require('../lib/helpers')

class CategoryController {
	static createOne = async (req, res) => {
		try {
			const newcategory = await Category.create(req.body)
			return SuccessResponse(res, newcategory, undefined, 201)
		} catch (err) {
			return ErrorResponse(res, err)
		}
	}

	static getOne = async (req, res) => {
		try {
			const category = await Category.findById(req.params.categoryID)
			return SuccessResponse(res, category)
		} catch (err) {
			return ErrorResponse(res, err)
		}
	}

	static getAll = async (req, res) => {
		try {
			const categories = await Category.find({})
			return SuccessResponse(res, categories)
		} catch (err) {
			return ErrorResponse(res, err)
		}
	}

	static updateOne = async (req, res) => {
		try {
			const updatedCategory = await Category.findOneAndUpdate(
				req.params.categoryID,
				req.body
			)
			return SuccessResponse(res, updatedCategory)
		} catch (err) {
			return ErrorResponse(res, err)
		}
	}

	static deleteOne = async (req, res) => {
		try {
			await Category.findOneAndDelete(req.params.categoryID)
			return SuccessResponse(res)
		} catch (err) {
			return ErrorResponse(res, err)
		}
	}
}

module.exports = CategoryController
