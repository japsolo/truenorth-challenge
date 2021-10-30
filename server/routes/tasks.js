import { Router } from 'express';
import Controller from '../controllers/tasks.js';

const Route = Router();

Route.get('/', Controller.browse); 
Route.put('/:id', Controller.edit);

export default Route;