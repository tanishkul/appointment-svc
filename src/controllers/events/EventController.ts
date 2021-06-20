import { NextFunction, Request, Response } from 'express';
import * as moment from 'moment';

import { SUCCESS_MSG } from '../../libs/constants';
import successHandler from '../../middlewares/successHandler';
import { EventService } from '../../services';

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

  public async getFreeSlots(req: Request, res: Response, next: NextFunction) {
    try {
      const { date, timezone } = req.query;
      const result =
        await EventController.getInstance().eventService.getFreeSlots({
          date,
          timezone,
        });
      return res.send(successHandler(SUCCESS_MSG.FETCH_SLOTS, result));
    } catch (error) {
      next(error);
    }
  }

  public async createEvents(req: Request, res: Response, next: NextFunction) {
    try {
      const { dateTime: startTime, duration } = req.body;
      const utcStartTime = moment(startTime).toDate();
      const utcEndTime = moment(startTime).add(duration, 'm').toDate();
      const result = await EventController.getInstance().eventService.create({
        endTime: utcEndTime,
        startTime: utcStartTime,
      });
      return res.send(successHandler(SUCCESS_MSG.CREATE, result));
    } catch (error) {
      next(error);
    }
  }

  public async getBookedEvents(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const { startDate, endDate } = req.body;
      const result =
        await EventController.getInstance().eventService.getBookedEvents({
          endDate,
          startDate,
        });
      return res.send(successHandler(SUCCESS_MSG.FETCH_EVENTS, result));
    } catch (error) {
      next(error);
    }
  }
}

export default EventController.getInstance();
