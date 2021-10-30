import Axios from 'axios';
import Task from '../models/tasks.js';

export default {
	browse: async (req, res) => {
		try {
			const { amount, reGenerate } = req.query;
			
			let endPoint = 'https://lorem-faker.vercel.app/api';

			if (reGenerate) {
				await Task.collection.drop();
			}

			let allTasks = await Task.find({});
			
			if (allTasks.length === 0) {
				endPoint += `?quantity=${amount || 3}`;
				const titles = await Axios.get(endPoint).then(response => response.data);
				
				for (const title of titles) {
					await Task.create({ title });
				}
	
				allTasks = await Task.find({});
			}

			return res.json(allTasks);
		} catch(error) {
			return res.status(505).json({
				message: 'Server error',
				reason: error
			});
		}
	},

	edit: async (req, res) => {
		try {
			let task = await Task.findOneAndUpdate(
				{ _id: req.params.id },
				{ status: req.body.status },
				{ new: true }
			);
			return res.json({
				message: 'Updated',
				task: task
			});
		} catch (error) {
			return res.status(500).json({
				message: 'Internal Server Error',
				reason: error
			});
		}
	}
}