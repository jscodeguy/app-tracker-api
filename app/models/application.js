const mongoose = require('mongoose')

const applicationSchema = new mongoose.Schema(
	{
		jobTitle: {
			type: String,
			required: true
		},
		dateApplied: {
			type: String
		},
		company: {
			type: String,
			required: true
		},
		companyPage: {
			type: String
		},
		receivedResponse: {
			type: Boolean,
		},
		rejected: {
			type: Boolean,
			default: false
		},
		followedUp: {
			type: Boolean,
			default: false
		},
		salaryOffer: {
			type: Number
		},
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			// required: true
		},
	},
	{
		timestamps: true
	}
)

module.exports = mongoose.model('Application', applicationSchema)
