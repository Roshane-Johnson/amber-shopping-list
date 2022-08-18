const mongoose = require('mongoose')

const ItemSchema = new mongoose.Schema(
	{
		name: { type: String, required: true, unique: true },
		category: {
			type: mongoose.SchemaTypes.ObjectId,
			required: true,
			ref: 'Category',
		},
		price: { type: Number, required: true },
		quantity: { type: Number, required: true },
	},
	{ timestamps: true, collection: 'items' }
)

module.exports = mongoose.model('Item', ItemSchema)
