import express, { Router } from 'express';

import gamesController from '../controllers/gamesController';

class GameRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }
    // here are defined the routes for Games, the methods are defined in gamesControllers for example "gamesController.listAll"
    config() {
        this.router.get('/all', gamesController.listAll);
        this.router.get('/', gamesController.list);
        this.router.get('/:id', gamesController.getOne);
        this.router.post('/', gamesController.create);
        this.router.put('/:id', gamesController.update);
        this.router.delete('/:id', gamesController.delete);
    }

}
const gameRoutes = new GameRoutes()
export default gameRoutes.router

