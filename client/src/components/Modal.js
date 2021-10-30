import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

import CloseIcon from '../assets/close-icon.png';

export default function Modal ({ data }) {
	const { id, title, status } = data;

	const setClass = e => e.currentTarget.classList.toggle('check');

	const { updateStatus, closeModalHandler } = useContext(TaskContext);

	return (
		<div className="modal">
			<div className="modal_content">
				<h2>Title: {title}</h2>
				<p>ID: {id}</p>
				<div 
					data-id={id}
					data-status={status}
					onClick={e => { updateStatus(e); setClass(e) }}
					className={`do-undo-slider ${Number(status) ? 'check' : ''}`}
				>
					<div className="marker"></div>
				</div>
				<button className="close-btn" onClick={closeModalHandler}>
					<img src={CloseIcon} alt="close icon" />
				</button>
			</div>
		</div>
	)
}