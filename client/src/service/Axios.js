import Axios from 'axios';

const Service = new Axios.create({
	baseURL: 'http://localhost:5000/',
})

export default Service;