import { Router } from 'express';

import { validationHandler } from '../../libs/routes/validationHandler';
import eventController from './EventController';
import validation from './validation';

const router = Router();

router
  .route('/')
  .post(...validationHandler(validation.create), eventController.createEvents);

router
  .route('/free/')
  .post(eventController.getFreeSlots);

router
  .route('/booked/')
  .post(eventController.getBookedEvents);

export default router;
