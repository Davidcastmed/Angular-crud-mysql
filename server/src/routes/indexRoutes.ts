import { Router } from 'express';

import { indexController } from '../controllers/indexController';

class IndexRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        // this will be the route for Index, the logic will be in indexController in the methods
        this.router.get('/', indexController.index);
    }

}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;