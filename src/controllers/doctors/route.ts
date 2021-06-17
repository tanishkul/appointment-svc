import { Router } from 'express';

import { validationHandler } from '../../libs/routes/validationHandler';
import doctorController from './DoctorController';
import validation from './validation';

const router = Router();

router
  .route('/')
  .get(...validationHandler(validation.list), doctorController.list);

router
  .route('/:id')
  .get(...validationHandler(validation.get), doctorController.get);

router
  .route('/')
  .post(...validationHandler(validation.create), doctorController.create);

router
  .route('/login')
  .post(...validationHandler(validation.login), doctorController.login);

router
  .route('/:id')
  .put(...validationHandler(validation.update), doctorController.update);

router
  .route('/:id')
  .delete(...validationHandler(validation.delete), doctorController.delete);
export default router;
