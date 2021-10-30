import mongoose from 'mongoose';

const TasksSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	status: {
		type: Number,
		default: 0
	}
}, { versionKey: false });


export default mongoose.model('tasks', TasksSchema);