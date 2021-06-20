import { Router } from 'express';

import { validationHandler } from '../../libs/routes/validationHandler';
import eventController from './EventController';
import validation from './validation';

const router = Router();

router
  .route('/')
  .get(
    ...validationHandler(validation.getFreeSlots),
    eventController.getFreeSlots,
  );

router
  .route('/')
  .post(
    ...validationHandler(validation.createEvents),
    eventController.createEvents,
  );

router
  .route('/booked/')
  .post(
    ...validationHandler(validation.getBookedEvents),
    eventController.getBookedEvents,
  );

export default router;
