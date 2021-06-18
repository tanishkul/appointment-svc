import { NextFunction, Request, Response } from 'express';
import * as moment from 'moment';

import { SUCCESS_MSG } from '../../libs/constants';
import successHandler from '../../middlewares/successHandler';
import { EventService, DoctorService } from '../../services';

class EventController {
  public static getInstance() {
    if (!EventController.instance) {
      EventController.instance = new EventController();
    }

    return EventController.instance;
  }
  private static instance: EventController;
  private eventService: EventService;

  /* tslint:disable: no-null-keyword */
  private constructor() {
    this.eventService = new EventService();
  }

  /**
   * Get Event
   * @param {string} id - Id of Event
   * @returns {IEvent}
   */
  // public async getCart(req: Request, res: Response, next: NextFunction) {
  //   try {
  //     const { id } = req.params;
  //     const result = await EventController.getInstance().eventService.get({
  //       originalId: id,
  //     });
  //     return res.send(successHandler(SUCCESS_MSG.FETCH, result));
  //   } catch (error) {
  //     next(error);
  //   }
  // }

  /**
   * Update the Event
   * @param {string} id - Id of Event
   * @param {string} fieldsResponse - FieldsResponse of Event
   * @returns {IEvent}
   */
  public async createEvents(req: Request, res: Response, next: NextFunction) {
    try {
      const { dateTime, duration } = req.body;
      const utcStartTime = dateTime.toUTCString();
      const utcEndTime = moment(utcStartTime).add(duration, 'minutes');
      const doctorId = '1234';
      const userId = '1234';
      const result = await EventController.getInstance().eventService.create({
        doctorId: '123',
        events: [{
          endTime: utcEndTime,
          startTime: utcStartTime,
        }],
        userId: '123',
      });
      return res.send(successHandler(SUCCESS_MSG.UPDATE, result));
    } catch (error) {
      next(error);
    }
  }

  /**
   * Update the Event
   * @param {string} id - Id of Event
   * @param {string} fieldsResponse - FieldsResponse of Event
   * @returns {IEvent}
   */
  // public async emptyCart(req: Request, res: Response, next: NextFunction) {
  //   try {
  //     const { id } = req.params;
  //     const data = JSON.parse(JSON.stringify(req.body));
  //     const result = await EventController.getInstance().eventService.emptyCart({
  //       ...data,
  //       id,
  //     });
  //     return res.send(successHandler(SUCCESS_MSG.UPDATE, result));
  //   } catch (error) {
  //     next(error);
  //   }
  // }
}

export default EventController.getInstance();
