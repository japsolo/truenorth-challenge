import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

export default function Task (props) {
	const { openModalHandler } = useContext(TaskContext);

	const { _id, title, status } = props.taskData;

	return (
		<>
			<article className={`task-box ${status ? 'done' : null}`} data-status={status} data-id={_id}>
				<h2>{title}</h2>
				<button
					className="action-button"
					onClick={openModalHandler}
				>View details</button>
			</article>
		</>
	)
}