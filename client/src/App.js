import { useEffect, useState } from 'react';

import Service from './service/Axios';

import TaskList from './components/TasksList';
import Modal from './components/Modal';
import Credits from './components/Credits';

import { TaskContext } from './context/TaskContext';

import './styles/App.scss';

function App() {
	const [taskList, setTasksList] = useState([]);
	const [showModal, setShowModal] = useState(false);
	const [taskData, setTaskData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	const updateStatus = async e => {
		const taskID = e.currentTarget.dataset.id;
		const taskStatus = Number(e.currentTarget.dataset.status);
		const response = await Service.put(`/tasks/${taskID}`, { status: taskStatus ? 0 : 1 }).then(response => response.data);
		if (response.message === 'Updated') {
			setTasksList(taskList.map(task => {
				if (task._id === taskID) {
					task.status = taskStatus ? 0 : 1;
					return task;
				}
				return task;
			}));
			setTimeout(() => setShowModal(!showModal), 800);
		}
	};

	const openModalHandler = e => {
		const parent = e.currentTarget.parentElement;
		const taksInfo = {
			id: parent.dataset.id,
			status: parent.dataset.status,
			title: parent.querySelector('h2').innerText,
		}
		setTaskData(taksInfo);
		setShowModal(true);
	}

	const closeModalHandler = () => setShowModal(false);

	useEffect(() => { 
		const amount = new URLSearchParams(window.location.search).get('amount');
		const reGenerate = new URLSearchParams(window.location.search).get('reGenerate');
		let endPoint = '/tasks?' + (amount ? `amount=${amount}&` : '') + (reGenerate ? `reGenerate=${reGenerate}` : '');
		Service.get(endPoint).then(response => {
			setTasksList(response.data);
			setIsLoading(false);
		});
	}, []);

	return (
		<>
			<TaskContext.Provider value={{ updateStatus, openModalHandler, closeModalHandler }}>
				<div className="App">
					<h2 className="tasks-title">Tasks List - 
						<span className="total-amount">Total amount: {taskList.length}</span>
						<span className="total-done">Tasks Done: {taskList.filter(task => task.status === 1).length}</span>
						<span className="total-todo">Tasks To-Do: {taskList.filter(task => task.status !== 1).length}</span>
					</h2>
					{ isLoading && (
						<div className="spinner">
							<div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
						</div>
					) }
					<TaskList taskList={taskList} />
				</div>
				{showModal && <Modal data={taskData} />}
			</TaskContext.Provider>
			<Credits />
		</>
	)
}

export default App;
