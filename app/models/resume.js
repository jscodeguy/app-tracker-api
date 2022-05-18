const mongoose = require('mongoose')

const ResumeSchema = new mongoose.Schema(
	{
		jobTitle: {
			type: String,
			required: true
		},
		industrySkills: {
			type: Array,
			required: true
		},
		hardSkills: {
			type: Array,
            required: true
		},
        projects: {
            type: Array
        },
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true
		},
	},
	{
		timestamps: true
	}
)

module.exports = mongoose.model('Resume', ResumeSchema)
