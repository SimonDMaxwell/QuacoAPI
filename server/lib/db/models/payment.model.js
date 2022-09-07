const db = require('../db.js')

let paymentSchema = new db.Schema({
	account: {
		type: db.Types.ObjectId,
		required: [true, 'No account provided'],
		ref: 'users',
	},
	cardholder: {
		type: String,
		required: [true, 'No cardholder name provided'],
	},
	card_no: {
		type: String,
		required: [true, 'No card number provided.'],
		minLength: [16, 'Invalid card number'],
		maxLength: [16, 'Invalid card number'],
	},
	expiry: {
		type: String,
		match: [/^((1[0-2])|(0[0-9]))\/0[\d]{2}$/gm, 'Invalid expiry date.'],
		required: true,
	},
})

module.exports = db.model('payments', paymentSchema)
