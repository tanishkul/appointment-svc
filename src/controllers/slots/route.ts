import { Router } from 'express';

import { validationHandler } from '../../libs/routes/validationHandler';
import slotsController from './SlotsController';
import validation from './validation';

const router = Router();

router
  .route('/')
  .get(...validationHandler(validation.list), slotsController.list);

// router
//   .route('/:id')
//   .get(...validationHandler(validation.get), slotsController.get);

router
  .route('/')
  .post(...validationHandler(validation.create), slotsController.create);

// router
//   .route('/login')
//   .post(...validationHandler(validation.login), slotsController.login);

// router
//   .route('/:id')
//   .put(...validationHandler(validation.update), slotsController.update);

// router
//   .route('/:id')
//   .delete(...validationHandler(validation.delete), slotsController.delete);
export default router;
