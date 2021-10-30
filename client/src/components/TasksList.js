import Task from './Task';

export default function TasksList ({ taskList }) {
	return (
		<section className="task-list">
			{ taskList.map(task => <Task key={task._id} taskData={task} />) }
		</section>
	)
}