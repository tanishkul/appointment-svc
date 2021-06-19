import * as moment from 'moment';
import config from '../../config/configuration';
import { getAllSlots } from '../../libs/utilities';
import EventRepository from '../../repositories/business/event/repository';

class EventService {
  private eventRepository: EventRepository;

  public constructor() {
    this.eventRepository = new EventRepository();
  }
  public async list(limit?: number, skip?: number) {
    return this.eventRepository.list({ limit, skip });
  }

  public async create(query: any) {
    const { timezone, startHour, endHour } = config;
    const format = 'hh:mm';
    const utcStartTime = new Date(moment.tz(startHour, format, timezone).utc().format());
    const utcEndTime = new Date(moment.tz(endHour, format, timezone).utc().format());
    const { startTime, endTime } = query;
    console.log('111111111111', utcStartTime, new Date(startTime), utcEndTime, new Date(endTime));
    const startEpoch = new Date(startTime).getTime();
    const endEpoch = new Date(endTime).getTime();
    const oldEvents = await this.eventRepository.getQuery({
      $and: [
        { start: { $lt: endEpoch } },
        { end: { $gt: startEpoch } },
      ],
    });

    console.log('Check for already existing event::::', oldEvents);
    if (!oldEvents.length) {
      return await this.eventRepository.create({ start: startEpoch, end: endEpoch, ...query});
    } else {
      throw {
        message: 'Booking already exists!',
        type: 'UnprocessableError',
      };
    }
  }

  public async getFreeSlots({date, timezone}) {
    const allSlots = getAllSlots(timezone);
    const endSlot = allSlots[allSlots.length - 1];
    let slots = [...allSlots];
    const events = await this.eventRepository.getQuery({
      $and: [
      { startTime: { $lt: new Date(endSlot.date) } },
      { startTime: { $gte: new Date(date) } },
    ]});
    if (events.length) {
      events.map((item) => {
        slots = slots.filter(({ timestamp }) => timestamp < item.start || timestamp >= item.end);
      });
    }
    slots = slots.map((slot) => {
      return moment(slot.zoneTime).format('LT');
    });
    return slots;
  }

  public async getBookedEvents({ startDate, endDate }) {
    const { timezone } = config;
    let result = [];
    const events = await this.eventRepository.getQuery({
      startTime: {
        $gte: new Date(startDate),
        $lt: new Date(endDate),
      },
  });
    if (events.length) {
      result = events.map(({ startTime, endTime }) => {
        const startTimeZone = moment(startTime.getTime()).tz(timezone).format();
        const endTimeZone = moment(endTime.getTime()).tz(timezone).format();
        return {
          endTime: endTimeZone,
          startTime: startTimeZone,
        };
      });
    }
    return result;
  }
}

export default EventService;
