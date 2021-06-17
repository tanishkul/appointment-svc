import { Router } from 'express';

import { validationHandler } from '../../libs/routes/validationHandler';
import eventController from './EventController';
import validation from './validation';

const router = Router();

// router.route('/').get(...validationHandler(validation.list), eventController.list);

router
  .route('/:id')
  .get(...validationHandler(validation.get), eventController.getCart);

// router.route('/').post(...validationHandler(validation.create), eventController.create);

router
  .route('/add/:id')
  .put(...validationHandler(validation.update), eventController.addItemToCart);

router
  .route('/empty/:id')
  .put(...validationHandler(validation.update), eventController.emptyCart);

export default router;
