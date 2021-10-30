import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import TasksRouter from './routes/tasks.js';

dotenv.config();
const PORT = process.env.PORT || 3000;
const DB_NAME = process.env.DB_NAME;

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(PORT, () => console.log(`Server working on ${PORT}`));

app.get('/', (req, res) => res.redirect('/tasks'));

app.use('/tasks', TasksRouter);

app.use('*', (req, res) => {
	res.status(404).json({
		status: 404,
		message: 'Not Found'
	});
});
