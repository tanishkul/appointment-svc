import { Router } from 'express';

import { validationHandler } from '../../libs/routes/validationHandler';
import eventController from './EventController';
import validation from './validation';

const router = Router();

//#region [swagger: /events/]
/**
 * @swagger
 * /events/:
 *   get:
 *     security:
 *       - APIKeyHeader: []
 *     tags:
 *       - Events
 *     description: Get a list of Free Slots available
 *     parameters:
 *       - in: query
 *         name: date
 *         required: true
 *         type: string
 *       - in: query
 *         name: timezone
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Successfully fetched
 *         schema:
 *           type: object
 *           properties:
 *             data:
 *               type: array
 *               items:
 *                 type: string
 *                 example: "8:00 AM"
 *             metadata:
 *               type: object
 *               properties:
 *                 code:
 *                   type: string
 *                   description: The status code of the response.
 *                   example: 200
 *                 message:
 *                   type: string
 *                   description: The message for the response.
 *                   example: Ok
 *                 timestamp:
 *                   type: string
 *                   description: The time when the request has been served.
 *                   example: 2021-06-19T07:45:32.621Z
 *       400:
 *         description: Bad Request
 *       404:
 *         description: Not found
 *       422:
 *         description: Unprocessable error
 *       500:
 *         description: Internal server error
 */
router
  .route('/')
  .get(
    ...validationHandler(validation.getFreeSlots),
    eventController.getFreeSlots,
  );

//#region [swagger: /events/]
/**
 * @swagger
 * /events/:
 *   post:
 *     security:
 *       - APIKeyHeader: []
 *     tags:
 *       - Events
 *     description: Creates an event with the startTime and duration
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: startTime
 *         required: true
 *         type: string
 *         example: "2021-06-19T07:45:32.621Z"
 *         description: startTime must be in ISO format.
 *       - in: body
 *         name: duration
 *         required: true
 *         type: number
 *         example: 30
 *         description: duration must be in minutes.
 *     responses:
 *       200:
 *         description: Successfully created
 *         schema:
 *           type: object
 *           properties:
 *             data:
 *               type: object
 *               properties:
 *                 startTime:
 *                   type: string
 *                   description: Starting Time of event
 *                   example: "2021-06-19T07:45:32.621Z"
 *                 endTime:
 *                   type: string
 *                   description: Ending Time of event
 *                   example: "2021-06-19T08:45:32.621Z"
 *                 start:
 *                   type: number
 *                   description: Timestamp of start time
 *                   example: 1624221600000
 *                 end:
 *                   type: number
 *                   description: Timestamp of end time
 *                   example: 1624221600000
 *                 originalId:
 *                   type: string
 *                   description: Original Id of the event.
 *                   example: 5eaffd14e7bed52b59fd21c1
 *                 id:
 *                   type: string
 *                   description: Id of the event.
 *                   example: 5eaffd14e7bed52b59fd21c1
 *             metadata:
 *               type: object
 *               properties:
 *                 code:
 *                   type: string
 *                   description: The status code of the response.
 *                   example: 200
 *                 message:
 *                   type: string
 *                   description: The message for the response.
 *                   example: Ok
 *                 timestamp:
 *                   type: string
 *                   description: The time when the request has been served.
 *                   example: 2021-06-19T07:45:32.621Z
 *       400:
 *         description: Bad Request
 *       404:
 *         description: Not found
 *       422:
 *         description: Unprocessable error
 *       500:
 *         description: Internal server error
 */
router
  .route('/')
  .post(
    ...validationHandler(validation.createEvents),
    eventController.createEvents,
  );

//#region [swagger: /events/booked]
/**
 * @swagger
 * /events/booked:
 *   post:
 *     security:
 *       - APIKeyHeader: []
 *     tags:
 *       - Events
 *     description: Get all events from startDate to endDate
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: startDate
 *         required: true
 *         type: string
 *         example: "2021-06-19T07:45:32.621Z"
 *         description: startDate must be in 'YYYY-MM-DD' format.
 *       - in: body
 *         name: endDate
 *         required: true
 *         type: string
 *         example: "2021-06-19T07:45:32.621Z"
 *         description: endDate must be in 'YYYY-MM-DD' format.
 *     responses:
 *       200:
 *         description: Successfully fetched
 *         schema:
 *           type: object
 *           properties:
 *             data:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   startTime:
 *                     type: string
 *                     description: Starting Time of event
 *                     example: "2021-06-19T07:45:32.621Z"
 *                   endTime:
 *                     type: string
 *                     description: Ending Time of event
 *                     example: "2021-06-19T07:45:32.621Z"
 *             metadata:
 *               type: object
 *               properties:
 *                 code:
 *                   type: string
 *                   description: The status code of the response.
 *                   example: 200
 *                 message:
 *                   type: string
 *                   description: The message for the response.
 *                   example: Ok
 *                 timestamp:
 *                   type: string
 *                   description: The time when the request has been served.
 *                   example: 2021-06-19T07:45:32.621Z
 *       400:
 *         description: Bad Request
 *       404:
 *         description: Not found
 *       422:
 *         description: Unprocessable error
 *       500:
 *         description: Internal server error
 */
router
  .route('/booked/')
  .post(
    ...validationHandler(validation.getBookedEvents),
    eventController.getBookedEvents,
  );

export default router;
